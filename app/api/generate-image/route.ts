import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const prompt = formData.get('prompt') as string;
    const referenceImageFile = formData.get('referenceImage') as File | null;

    // 验证 prompt
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prompt cannot be empty' },
        { status: 400 }
      );
    }

    const trimmedPrompt = prompt.trim();

    // 检查 API Key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'AI service is not properly configured' },
        { status: 500 }
      );
    }

    let enhancedPrompt = trimmedPrompt;

    // 如果有参考图片，将其转换为 Base64 并增强 prompt
    let referenceImageBase64: string | null = null;
    if (referenceImageFile) {
      try {
        const buffer = await referenceImageFile.arrayBuffer();
        referenceImageBase64 = Buffer.from(buffer).toString('base64');
        
        // 增强 prompt，告诉 AI 参考了一个参考图片
        enhancedPrompt = `Based on the reference image provided, ${trimmedPrompt}`;
      } catch (error) {
        return NextResponse.json(
          { error: 'Failed to process reference image' },
          { status: 400 }
        );
      }
    }

    // 构建请求体
    const requestBody: any = {
      model: 'dall-e-3',
      prompt: enhancedPrompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard',
      style: 'vivid',
      response_format: 'b64_json',
    };

    // 调用 OpenAI DALL-E 3 API
    const openaiResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json();
      let errorMessage = 'Failed to generate image';

      if (errorData.error?.message) {
        errorMessage = errorData.error.message;
      }

      if (openaiResponse.status === 429) {
        errorMessage = 'Rate limit exceeded. Please try again later.';
      } else if (openaiResponse.status === 401) {
        errorMessage = 'Authentication failed. Please check your API configuration.';
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: openaiResponse.status }
      );
    }

    const data = await openaiResponse.json();

    // 验证响应数据
    if (!data.data || data.data.length === 0) {
      return NextResponse.json(
        { error: 'No image data received from AI service' },
        { status: 500 }
      );
    }

    const b64Data = data.data[0]?.b64_json;
    if (!b64Data) {
      return NextResponse.json(
        { error: 'Invalid image data format' },
        { status: 500 }
      );
    }

    // 返回 Base64 数据
    const imageDataUrl = `data:image/png;base64,${b64Data}`;
    return NextResponse.json({ 
      image: imageDataUrl,
      success: true,
      hasReference: !!referenceImageFile,
    });

  } catch (error: any) {
    let errorMessage = 'An unexpected error occurred. Please try again.';

    if (error?.message?.includes('fetch')) {
      errorMessage = 'Network error. Please check your connection.';
    } else if (error?.message?.includes('JSON')) {
      errorMessage = 'Invalid response format from AI service.';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
