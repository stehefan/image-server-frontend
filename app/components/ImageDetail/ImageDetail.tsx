import {ImageResponse} from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ImageDetailProps {
    image: ImageResponse;
}

export const ImageDetail: React.FC<ImageDetailProps> = ({image}) => {
    return (
        <div className='image-detail flex flex-col items-center justify-center mt-10 gap-10'>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-right font-extrabold">Image ID:</div>
                <div className="text-left">{image.id}</div>
                <div className="text-right font-extrabold">Image ObjectID:</div>
                <div className="text-left">{image.objectId}</div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2 w-screen pl-5 pr-5'>
                {image.dimensions && image.dimensions.map((dimension) => (
                    <Link href={dimension.href} title={`Open the Variant ${dimension.name} in new tab`}
                          key={dimension.id} target='_blank'
                          className='max-w-sm w-full relative bg-gradient-to-tr from-gray-300 dark:from-gray-700 '>
                        <Image src={dimension.href} alt={`{dimension.name} ({dimension.width} x {dimension.height})`}
                               width={dimension.width} height={dimension.height}/>
                        <span
                            className='text-center text-sm text-gray-950 absolute bottom-0 left-0 w-full bg-amber-50 bg-opacity-75'>
                            {dimension.name} ({dimension.width} x {dimension.height})
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ImageDetail;