import { NextResponse } from 'next/server';

/**
 * AI Design Lab 图像生成 API 路由
 * 
 * 此接口使用 OpenAI DALL-E 3 生成高质量的设计图像
 * 
 * 环境变量要求：
 * - OPENAI_API_KEY: OpenAI API 密钥（必需）
 * 
 * 配置指南：
 * 1. 获取 API Key: https://platform.openai.com/api-keys
 * 2. Vercel 配置: https://vercel.com/docs/projects/environment-variables
 */

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
    console.log('[AI] Starting image generation for prompt:', trimmedPrompt.substring(0, 100));

    // 检查 API Key - 这是关键步骤
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('[AI] CRITICAL: OpenAI API Key is missing!');
      console.error('[AI] Please configure OPENAI_API_KEY in your Vercel environment variables');
      
      return NextResponse.json(
        { 
          error: 'AI service is not properly configured',
          details: 'OPENAI_API_KEY environment variable is missing',
          configUrl: 'https://vercel.com/docs/projects/environment-variables',
          instructions: 'Please add OPENAI_API_KEY to your Vercel project settings'
        },
        { status: 500 }
      );
    }

    // 验证 API Key 格式
    if (!apiKey.startsWith('sk-')) {
      console.error('[AI] WARNING: API Key format seems incorrect');
    }

    console.log('[AI] API Key found, length:', apiKey.length);
    console.log('[AI] Calling OpenAI DALL-E 3 API...');

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

    console.log('[AI] OpenAI response status:', openaiResponse.status);

    // 处理 API 响应
    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json();
      console.error('[AI] OpenAI API error:', errorData);

      let errorMessage = 'Failed to generate image';
      let userMessage = 'An error occurred while generating your design';

      if (errorData.error?.message) {
        errorMessage = errorData.error.message;
      }

      // 根据状态码提供具体的错误信息
      if (openaiResponse.status === 429) {
        userMessage = 'Rate limit exceeded. Please wait a moment and try again.';
        console.error('[AI] Rate limit hit - API quota exceeded');
      } else if (openaiResponse.status === 401) {
        userMessage = 'Authentication failed. Please check your API configuration.';
        console.error('[AI] Authentication error - Invalid API Key');
      } else if (openaiResponse.status === 400) {
        userMessage = 'Invalid request. Please check your design description.';
        console.error('[AI] Bad request - Invalid prompt or parameters');
      } else if (openaiResponse.status === 500) {
        userMessage = 'OpenAI service is temporarily unavailable. Please try again later.';
        console.error('[AI] OpenAI server error');
      }

      return NextResponse.json(
        { 
          error: userMessage,
          details: errorMessage,
          statusCode: openaiResponse.status
        },
        { status: openaiResponse.status >= 500 ? 503 : openaiResponse.status }
      );
    }

    const data = await openaiResponse.json();
    console.log('[AI] OpenAI response received, processing...');

    // 验证响应数据结构
    if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
      console.error('[AI] Invalid response structure:', data);
      return NextResponse.json(
        { error: 'No image data received from AI service' },
        { status: 500 }
      );
    }

    const b64Data = data.data[0]?.b64_json;
    if (!b64Data || typeof b64Data !== 'string') {
      console.error('[AI] No b64_json in response:', data.data[0]);
      return NextResponse.json(
        { error: 'Invalid image data format' },
        { status: 500 }
      );
    }

    console.log('[AI] Image generated successfully, size:', (b64Data.length / 1024).toFixed(2), 'KB');

    // 返回 Base64 数据
    const imageDataUrl = `data:image/png;base64,${b64Data}`;
    return NextResponse.json({ 
      image: imageDataUrl,
      success: true,
      timestamp: new Date().toISOString(),
    });

  } catch (error: any) {
    console.error('[AI] Unexpected error:', error);

    let errorMessage = 'An unexpected error occurred';
    let statusCode = 500;

    if (error?.message?.includes('fetch')) {
      errorMessage = 'Network error. Please check your connection and try again.';
    } else if (error?.message?.includes('JSON')) {
      errorMessage = 'Invalid response format from AI service.';
    } else if (error?.message?.includes('timeout')) {
      errorMessage = 'Request timeout. Please try again.';
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: error?.message
      },
      { status: statusCode }
    );
  }
}

/**
 * GET 端点 - 返回配置状态和诊断信息
 * 用于前端检查 API 是否正确配置
 */
export async function GET() {
  const apiKeyExists = !!process.env.OPENAI_API_KEY;
  const apiKeyValid = apiKeyExists && process.env.OPENAI_API_KEY!.startsWith('sk-');

  return NextResponse.json({
    status: apiKeyValid ? 'configured' : 'not-configured',
    apiKeyExists,
    apiKeyValid,
    message: apiKeyValid 
      ? 'AI service is ready' 
      : 'Please configure OPENAI_API_KEY in environment variables',
    configUrl: 'https://vercel.com/docs/projects/environment-variables',
  });
}
