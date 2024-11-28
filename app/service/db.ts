import * as schema from '../config/schema';
import { eq } from 'drizzle-orm';
import { ImageResponse } from '@/types';
import { dbClient } from '@/config/client';

export const getImagesFromDatabase = async (): Promise<ImageResponse[] | undefined> => {
    const result = await dbClient.query.images.findMany({
        with: {
            dimensions: true,
        },
    });

    return Promise.resolve(result);
};

export const getImageFromDatabase = async (id: number): Promise<ImageResponse | undefined> => {
    const result = await dbClient.query.images.findFirst({
        where: eq(schema.images.id, id),
        with: {
            dimensions: true,
        },
    });

    return Promise.resolve(result);
};

export const deleteImageFromDatabase = async (id: number): Promise<void> => {
    return dbClient.delete(schema.images).where(eq(schema.images.id, id));
};
