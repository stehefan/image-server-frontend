import ImageDetail from '@/components/ImageDetail/ImageDetail';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getImage } from '@/service/image';

export default async function ImagePage({ params }: { params: Promise<{ imageId: string }> }) {
    const imageId = Number.parseInt((await params).imageId);

    if (Number.isNaN(imageId)) {
        return (<div>Error: imageId needs to be a number</div>);
    }

    const image = await getImage(imageId);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <span className="absolute top-5 left-5">
                <Link href="/" className="no-underline font-extrabold">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    {' '}
                    Back
                </Link>
            </span>
            <main className="w-full">
                <ImageDetail image={image} />
            </main>
        </div>
    );
}
