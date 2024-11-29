import { deleteImage } from '@/service/image';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ imageId: string }> }) {
    const imageIdParam = (await params).imageId;
    const imageId = Number.parseInt(imageIdParam);

    if (Number.isNaN(imageId)) {
        return NextResponse.json({ error: 'imageId needs to be a number' }, { status: 400 });
    }

    try {
        await deleteImage(imageId);
    }
    catch (error) {
        console.error('error deleting image', error);
        return NextResponse.json({ error: 'error deleting image' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Deleted image', imageId }, { status: 200 });
}
