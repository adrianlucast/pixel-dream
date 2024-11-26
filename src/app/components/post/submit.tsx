"use server";

import Backend from "@/app/backend";
import Post from "@/core/model/Post";  // Alterando para Post
import MaybeNew from "@/core/model/MaybeNew";

export async function submit(post: MaybeNew<Post>): Promise<Post> {  // Alterando para Post
    return await Backend.posts.salvar(post as Post);  // Alterando para Post
}
