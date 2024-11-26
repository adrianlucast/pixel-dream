"use client";

import Lead from "@/core/model/Lead";
import InputTexto from "../shared/InputTexto";
import Link from 'next/link';
import { useState } from "react";
import { submit } from "./submit";
import { useRouter } from "next/navigation";
import MaybeNew from "@/core/model/MaybeNew";

export interface FormularioLeadProps {
    lead: MaybeNew<Lead>
}

export default function FormularioLead({ lead: initial }: FormularioLeadProps) {

    const [lead, setLead] = useState<MaybeNew<Lead>>(initial);
    const router = useRouter();

    // Opções de sexualidade
    const sexualities = [
        "Masculino",
        "Feminino",
        "Não-binário",
        "Agênero",
        "Gênero Fluido",
        "Transgênero",
        "Outro"
    ];

    // Opções de situação
    const situations = [
        "Venda Efetuada",
        "Venda Perdida",
        "Em contato"
    ];

    // Função para salvar os dados
    function save() {
        submit(lead);
        router.push('/leads');
    }

    return (
        <div className="flex flex-col gap-5">
            <InputTexto
                label="Nome"
                type="text"
                value={lead.name}
                onChange={(e) => setLead({ ...lead, name: e.target.value })}
                className="w-full" // Garantir largura total
            />
            <InputTexto
                label="Idade"
                type="number"
                value={lead.age}
                onChange={(e) => setLead({ ...lead, age: e.target.value ? parseInt(e.target.value, 10) : 0 })}
                className="w-full" // Garantir largura total
            />

            {/* Campo de Sexo */}
            <div>
                <label className="block text-sm font-medium text-white mb-2">Sexo</label>
                <select
                    className="w-full cursor-pointer bg-zinc-800 p-3 rounded-md text-white"
                    value={lead.sex} // Atualizando o valor do sexo
                    onChange={(e) => setLead({ ...lead, sex: e.target.value })} // Atualiza o valor de 'sex' com a opção selecionada
                >
                    <option value="">Selecione o sexo</option>
                    {sexualities.map((sex) => (
                        <option key={sex} value={sex}>
                            {sex}
                        </option>
                    ))}
                </select>
            </div>

            {/* Campo de Situação */}
            <div>
                <label className="block text-sm font-medium text-white mb-2">Situação</label>
                <select
                    className="w-full cursor-pointer bg-zinc-800 p-3 rounded-md text-white"
                    value={lead.situation} // Atualizando o valor da situação
                    onChange={(e) => setLead({ ...lead, situation: e.target.value })} // Atualiza o valor de 'situation' com a opção selecionada
                >
                    <option value="">Selecione a situação</option>
                    {situations.map((situation) => (
                        <option key={situation} value={situation}>
                            {situation}
                        </option>
                    ))}
                </select>
            </div>

            {/* Campo de Post */}
            <div>
                <label className="block text-sm font-medium text-white mb-2">Post</label>
                <select
                    className="w-full cursor-pointer bg-zinc-800 p-3 rounded-md text-white"
                    value={lead.post} // Atualizando o valor do post
                    onChange={(e) => setLead({ ...lead, post: e.target.value })} // Atualiza o valor de 'post' com a opção selecionada
                >
                    <option value="">Selecione um Post</option>
                    <option value="Post 1">Post 1</option>
                    <option value="Post 2">Post 2</option>
                    <option value="Post 3">Post 3</option>
                </select>
            </div>

            <div className="flex gap-5">
                <button className="bg-blue-500 px-4 py-2 rounded-md w-full md:w-auto" onClick={save}>Salvar</button>
                <Link className="bg-blue-500 px-4 py-2 rounded-md w-full md:w-auto" href="/leads">Cancelar</Link>
            </div>
        </div>
    );
}
