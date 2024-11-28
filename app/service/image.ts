import { deleteImageFromDatabase, getImageFromDatabase, getImagesFromDatabase } from './db';
import { CustomError } from '@/service/customError';

export const getImages = async () => {
    const result = await getImagesFromDatabase();
    if (!result) {
        throw new CustomError('image for id not found', 404);
    }

    return Promise.resolve(result);
};

export const getImage = async (imageId: number) => {
    const result = await getImageFromDatabase(imageId);

    if (!result) {
        throw new CustomError('image for id not found', 404);
    }

    return Promise.resolve(result);
};

export const deleteImage = async (imageId: number) => {
    await deleteImageFromDatabase(imageId).then(() => {
        return Promise.resolve({ message: 'image deleted' });
    }).catch((error) => {
        console.error(error);
        throw new CustomError('image for id not found', 404);
    });
};
