import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

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

    // 调用 OpenAI DALL-E 3 API
    const openaiResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'dall-e-3',
        prompt: trimmedPrompt,
        n: 1,
        size: '1024x1024',
        quality: 'standard',
        style: 'vivid',
        response_format: 'b64_json',
      }),
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
