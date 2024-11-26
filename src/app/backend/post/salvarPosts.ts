'use server'

import Post from '@/core/model/Post'
import Id from '@/core/utils/Id'
import RepositorioPost from './RepositorioPosts'
import MaybeNew from '@/core/model/MaybeNew'

export default async function salvarPost(post: MaybeNew<Post>) {
    const novoPost = {
        ...post,
        id: post.id ?? Id.novo,
    }

    return RepositorioPost.salvar(novoPost)
}
