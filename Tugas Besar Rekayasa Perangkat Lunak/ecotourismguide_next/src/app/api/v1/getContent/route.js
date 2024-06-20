import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';

export async function GET(request) {
  try {
    const contents = await prisma.Content.findMany();

    return NextResponse.json(contents);
  } catch (err) {
    console.error('Error fetching contents:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
