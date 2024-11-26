import Backend from "@/app/backend";
import ListaLead from "@/app/components/lead/ListaLead";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import { IconPlus, IconUser } from "@tabler/icons-react";
import Link from 'next/link';
import { use } from 'react';

export default function Page() {
    const leads = use(Backend.leads.obter());

    return (
        <Pagina className="bg-black text-white p-8">
            {/* Título da Página */}
            <Titulo icone={IconUser} principal="Leads" secundario="Cadastro de Lead" />

            {/* Container para o título "Leads Cadastrados" e o botão "Novo Lead" na mesma linha */}
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-2xl font-semibold text-[#0cbfde]">
                    Leads Cadastrados
                </h2>

                {/* Botão Novo Lead */}
                <Link
                    className="flex items-center gap-2 bg-[#0cbfde] text-white py-2 px-6 rounded-md hover:bg-[#0aa9a6] transition duration-200"
                    href="/leads/novo"
                >
                    <IconPlus size={20} />
                    <span className="font-medium">Novo Lead</span>
                </Link>
            </div>

            {/* Lista de Leads */}
            <div className="mt-6">
                <ListaLead leads={leads} />
            </div>
        </Pagina>
    );
}
