import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  
  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    userAgent,
    isIOS,
    headers: Object.fromEntries(request.headers.entries()),
    url: request.url,
  });
}
