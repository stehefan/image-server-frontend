import {AccessibleDimension, ImageResponse} from "@/types";
import Image from "next/image";

export interface ImageListProps {
    images: ImageResponse[];
}

export function ImageList({images}: ImageListProps) {
    return (
        <div className="flex flex-row flex-wrap gap-4">
            {images.map((image) => {
                if (image.dimensions?.length === 0) {
                    return null;
                }
                const firstDimension: AccessibleDimension = image.dimensions![0];
                return (
                    <Image key={image.id} src={firstDimension.href} alt={`${image.id}`} width={firstDimension.width / 10 }
                           height={firstDimension.height / 10}/>
                );
            })}
        </div>
    );
}