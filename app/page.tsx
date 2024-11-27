import Link from "next/link";

export default function Page() {
    return (
        <div className='flex flex-col items-center justify-center mt-10 gap-10'>
            <Link href={"/client"}>Go to client version</Link>
            <Link href={"/server"}>Go to server version</Link>
        </div>
    )
}