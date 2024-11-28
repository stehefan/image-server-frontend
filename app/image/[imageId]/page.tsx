import ImageDetail from "@/components/ImageDetail/ImageDetail";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default async function ImagePage({params}: {params: Promise<{imageId: string}>}) {
    const imageId = Number.parseInt((await params).imageId);

    if (Number.isNaN(imageId)) {
        return (<div>Error: imageId needs to be a number</div>)
    }

    const result = await fetch("http://localhost:3000/image/" + imageId);
    const data = await result.json();

    if (!result.ok) {
        return (<div>Error: {data}</div>)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <span className='absolute top-5 left-5'><Link href='/' className={'no-underline font-extrabold'}><FontAwesomeIcon icon={faArrowLeft} /> Back</Link></span>
            <main className="w-full">
                <ImageDetail image={data}/>
            </main>
        </div>
    );
}
