import { drizzle } from 'drizzle-orm/node-postgres';
import { reset } from 'drizzle-seed';
import { faker } from '@faker-js/faker';
import * as schema from '@/config/schema';
import { NextResponse } from 'next/server';

const db = drizzle(process.env.DATABASE_URL!);

export async function GET() {
    try {
        await reset(db, schema);
        for (let i = 0; i < 100; i++) {
            const queryResult = await db.insert(schema.images).values({
                objectId: crypto.randomUUID().toString(),
            }).returning();

            const createdImage = queryResult[0];
            const numberOfDimensions = Math.floor(Math.random() * 5);

            for (let j = 0; j < numberOfDimensions; j++) {
                const width = faker.number.int({ min: 1024, max: 2048 });
                const height = faker.number.int({ min: 768, max: 1536 });

                await db.insert(schema.dimensions).values({
                    imageId: createdImage.id,
                    width: width,
                    height: height,
                    name: faker.word.sample(),
                    href: `https://picsum.photos/seed/${createdImage.objectId}/${width}/${height}`,
                });
            }
        }
    }
    catch (error) {
        console.error('Error seeding database:', error);
        return NextResponse.json({ error: 'Seeding failed' }, { status: 500 });
    }
    return NextResponse.json({ message: 'Seeding successful' });
}
