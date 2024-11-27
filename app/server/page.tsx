'use client';

import useSWR from 'swr'
import {ImageList} from "@/ImageList/ImageList";

const imagesFetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
    const {data, error, isLoading} = useSWR('http://localhost:3000/image', imagesFetcher);

    if (isLoading) return <div>isLoading</div>
    if (error) return <div>{error}</div>

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <ImageList images={data}/>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <span>Created by <a href="https://www.stefanlier.de/">Stefan</a> <i>for</i> 🦔</span>
            </footer>

        </div>
    );
}
