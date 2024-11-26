import Backend from "@/app/backend";
import ListaPost from "@/app/components/post/ListaPost";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import { IconPlus, IconFileText } from "@tabler/icons-react";
import Link from 'next/link';
import { use } from 'react';

export default function Page() {
    const posts = use(Backend.posts.obter());

    return (
        <Pagina className="bg-black text-white p-8">
            {/* Título da Página */}
            <Titulo icone={IconFileText} principal="Postagens" secundario="Cadastro de Postagem" />

            {/* Cabeçalho com título "Posts Cadastrados" e Botão "Novo Post" */}
            <div className="flex justify-between items-center mt-8">
                {/* Título "Posts Cadastrados" */}
                <h2 className="text-2xl font-semibold text-[#0cbfde]">
                    Posts Cadastrados
                </h2>

                {/* Botão Novo Post */}
                <Link
                    className="flex items-center gap-2 bg-[#0cbfde] text-white py-2 px-6 rounded-md hover:bg-[#0aa9a6] transition duration-200"
                    href="/posts/novo"
                >
                    <IconPlus size={20} />
                    <span className="font-medium">Novo Post</span>
                </Link>
            </div>

            {/* Lista de Posts */}
            <div className="mt-6">
                <ListaPost posts={posts} />
            </div>
        </Pagina>
    );
}
