import { getImages } from '@/service/image';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(await getImages());
}
