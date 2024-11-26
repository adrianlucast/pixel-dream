import FormularioPost from "@/app/components/post/FormularioPost";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import Post from "@/core/model/Post";
import { IconFileText } from "@tabler/icons-react";
import { use } from "react";
import { notFound } from "next/navigation";
import RepositorioPost from "@/app/backend/post/RepositorioPosts";
import MaybeNew from "@/core/model/MaybeNew";

const empty: MaybeNew<Post> = {
    link: "",
    plataform: "",
    title: ""
};

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
    const { id } = use(params);

    const post: MaybeNew<Post> | null = id === 'novo' ? empty : use(RepositorioPost.obterPorID(id));

    if (!post) {
        notFound();
    }

    return (
        <Pagina className="bg-black text-white flex flex-col gap-10">
            <Titulo icone={IconFileText} principal="Postagens" secundario="Cadastro de Postagem" />
            <FormularioPost post={post} />
        </Pagina>
    );
}
