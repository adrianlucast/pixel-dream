"use client";

import Post from "@/core/model/Post";  // Alterando para Post
import InputTexto from "../shared/InputTexto";
import Link from 'next/link';
import { useState } from "react";
import { submit } from "./submit";
import { useRouter } from "next/navigation";
import MaybeNew from "@/core/model/MaybeNew";

export interface FormularioPostProps {
    post: MaybeNew<Post>
}

export default function FormularioPost({ post: initial }: FormularioPostProps) {

    const [post, setPost] = useState<MaybeNew<Post>>(initial)

    const router = useRouter();

    function save() {
        submit(post);
        router.push('/posts');
    }

    // Opções de plataformas
    const platforms = [
        "Facebook",
        "Instagram",
        "Twitter"
    ];

    return (
        <div className="flex flex-col gap-5">
            <InputTexto
                label="Link"
                type="text"
                value={post.link}
                onChange={(e) => setPost({ ...post, link: e.target.value })}
                className="w-full"
            />

            {/* Campo de Plataforma */}
            <div>
                <label className="block text-sm font-medium text-white mb-2">Plataforma</label>
                <select
                    className="w-full cursor-pointer bg-zinc-800 p-3 rounded-md text-white"
                    value={post.plataform}
                    onChange={(e) => setPost({ ...post, plataform: e.target.value })}
                >
                    <option value="">Selecione a plataforma</option>
                    {platforms.map((platform) => (
                        <option key={platform} value={platform}>
                            {platform}
                        </option>
                    ))}
                </select>
            </div>

            <InputTexto
                label="Titulo"
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full"
            />

            <div className="flex gap-5">
                <button className="bg-blue-500 px-4 py-2 rounded-md w-full md:w-auto" onClick={save}>Salvar</button>
                <Link className="bg-blue-500 px-4 py-2 rounded-md w-full md:w-auto" href="/posts">Cancelar</Link>
            </div>
        </div>
    )
}
