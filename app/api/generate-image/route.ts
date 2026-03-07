import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// 初始化 OpenAI 客户端
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // 验证 prompt 不为空
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: 'Prompt cannot be empty' },
        { status: 400 }
      );
    }

    console.log('Generating image for prompt:', prompt.trim());

    // 调用 OpenAI DALL-E 3 API 生成图像
    const response = await client.images.generate({
      model: 'dall-e-3',
      prompt: prompt.trim(),
      n: 1,
      size: '1024x1024',
      quality: 'standard',
      style: 'vivid',
      response_format: 'b64_json', // 直接请求 Base64 格式，更稳定
    });

    // 获取生成的 Base64 图像数据
    const b64Data = response.data[0]?.b64_json;

    if (!b64Data) {
      return NextResponse.json(
        { error: 'Failed to generate image data' },
        { status: 500 }
      );
    }

    // 返回 Base64 数据给前端
    return NextResponse.json({ 
      image: `data:image/png;base64,${b64Data}` 
    });

  } catch (error: any) {
    console.error('Image generation error:', error);

    // 处理特定的 OpenAI 错误
    let errorMessage = 'Failed to generate image. Please try again.';
    let statusCode = 500;

    if (error?.message?.includes('rate limit')) {
      errorMessage = 'Rate limit exceeded. Please try again later.';
      statusCode = 429;
    } else if (error?.message?.includes('billing')) {
      errorMessage = 'Service temporarily unavailable (billing).';
    } else if (error?.message?.includes('safety')) {
      errorMessage = 'Your prompt was flagged by our safety system. Please try a different description.';
      statusCode = 400;
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}
