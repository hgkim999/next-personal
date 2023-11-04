import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    version: process.env.VERCEL_GIT_COMMIT_SHA,
  });
}
