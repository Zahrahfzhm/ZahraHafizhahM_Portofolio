import { NextResponse } from 'next/server';
import prisma from '@/libs/prisma';

// Handle POST request
export async function POST(req) {
    const { nama_pelaku, password } = await req.json();

    const user = await prisma.Pelaku_wisata.findUnique({
        where: { nama_pelaku, password },
    });

    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ user }, { status: 200 });
}
