import { ImageList } from '@/components/ImageList/ImageList';
import { getImages } from '@/service/image';

export default async function Home() {
    const images = await getImages();

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        >
            <header>
                <h1 className="text-3xl font-bold">Image listing</h1>
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <ImageList images={images} />
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <span>
                    Created by
                    {' '}
                    <a href="https://www.stefanlier.de/">Stefan</a>
                    {' '}
                    <i>for</i>
                    {' '}
                    🦔
                </span>
            </footer>
        </div>
    );
}
