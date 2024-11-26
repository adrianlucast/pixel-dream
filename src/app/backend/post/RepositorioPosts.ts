import Post from "@/core/model/Post";
import { PrismaClient, Post as PostEntity } from "@prisma/client";

export default class RepositorioPost {
    
    private static db: PrismaClient = new PrismaClient()

    static async salvar(post: Post): Promise<Post> {
        return await this.db.post.upsert({
            where: { id: post.id },
            update: post,
            create: post
        });
    }

    static async obterTodos(): Promise<Post[]> {
        return await this.db.post.findMany();
    }

    static async obterPorID(id: string): Promise<Post | null> {
        const post = await this.db.post.findUnique({
            where: { id },
        });

        return post;
    }
}
