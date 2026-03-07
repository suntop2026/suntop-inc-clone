import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // 验证 prompt
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      console.error('[AI] Invalid prompt:', prompt);
      return NextResponse.json(
        { error: 'Prompt cannot be empty' },
        { status: 400 }
      );
    }

    const trimmedPrompt = prompt.trim();
    console.log('[AI] Starting image generation for prompt:', trimmedPrompt);

    // 检查 API Key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('[AI] OpenAI API Key is not configured');
      return NextResponse.json(
        { error: 'AI service is not properly configured. Please contact support.' },
        { status: 500 }
      );
    }

    // 调用 OpenAI DALL-E 3 API
    console.log('[AI] Calling OpenAI DALL-E 3 API...');
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

    console.log('[AI] OpenAI response status:', openaiResponse.status);

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json();
      console.error('[AI] OpenAI API error:', errorData);

      let errorMessage = 'Failed to generate image';
      if (errorData.error?.message) {
        errorMessage = errorData.error.message;
      }

      if (openaiResponse.status === 429) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again in a moment.' },
          { status: 429 }
        );
      }

      if (openaiResponse.status === 401) {
        return NextResponse.json(
          { error: 'Authentication failed. Please check API configuration.' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: errorMessage || 'Failed to generate image' },
        { status: openaiResponse.status }
      );
    }

    const data = await openaiResponse.json();
    console.log('[AI] OpenAI response received, processing...');

    // 验证响应数据
    if (!data.data || data.data.length === 0) {
      console.error('[AI] No image data in response:', data);
      return NextResponse.json(
        { error: 'No image data received from AI service' },
        { status: 500 }
      );
    }

    const b64Data = data.data[0]?.b64_json;
    if (!b64Data) {
      console.error('[AI] No b64_json in response:', data.data[0]);
      return NextResponse.json(
        { error: 'Invalid image data format' },
        { status: 500 }
      );
    }

    console.log('[AI] Image generated successfully, size:', b64Data.length);

    // 返回 Base64 数据
    const imageDataUrl = `data:image/png;base64,${b64Data}`;
    return NextResponse.json({ 
      image: imageDataUrl,
      success: true,
    });

  } catch (error: any) {
    console.error('[AI] Unexpected error:', error);

    let errorMessage = 'An unexpected error occurred. Please try again.';
    let statusCode = 500;

    if (error?.message?.includes('fetch')) {
      errorMessage = 'Network error. Please check your connection.';
    } else if (error?.message?.includes('JSON')) {
      errorMessage = 'Invalid response format from AI service.';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}
