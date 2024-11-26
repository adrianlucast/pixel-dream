import Post from '@/core/model/Post';  
import Image from 'next/image';
import Link from 'next/link';

export interface LinhaPostProps {  
    post: Post;  
}

export default function LinhaPost({ post }: LinhaPostProps) {  
    return (
        <Link 
            className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer"
            href={`/posts/${post.id}`}  
        >

            <div className="flex flex-col">
                <span className="text-xl font-black">{post.title}</span>  
                <span className="text-sm text-zinc-400">{post.plataform}</span>
            </div>
        </Link>
    );
}
