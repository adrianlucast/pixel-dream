import Post from '@/core/model/Post';  
import LinhaPost from './LinhaPost';  

export interface ListaPostProps { 
    posts: Post[];  
}

export default function ListaPost(props: ListaPostProps) {  
    return (
        <div className="flex flex-col gap-4">
            {props.posts.map((post: Post) => {  
                return <LinhaPost key={post.id} post={post} />; 
            })}
        </div>
    );
}
