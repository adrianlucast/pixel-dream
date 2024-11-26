import FormularioLead from "@/app/components/lead/FormularioLead";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import Lead from "@/core/model/Lead";
import { IconUser } from "@tabler/icons-react";
import { use } from "react";
import { notFound } from "next/navigation";
import RepositorioLead from "@/app/backend/lead/RepositorioLeads";
import MaybeNew from "@/core/model/MaybeNew";

const empty: MaybeNew<Lead> = {
    name: "",
    age: 0,
    sex: "",
    situation: "",
    post: ""
};

interface PageProps {
    params: Promise<{ id: string }>
}

export default function Page({ params }: PageProps) {
    const { id } = use(params);

    const lead: MaybeNew<Lead> | null = id === 'novo' ? empty : use(RepositorioLead.obterPorID(id))

    if ( !lead ) {
        notFound();
    }

    return (
        <Pagina className="bg-black text-white flex flex-col gap-10">
            <Titulo icone={IconUser} principal='Leads' secundario='Cadastro de Lead' />
            <FormularioLead lead={lead} />
        </Pagina>
    )
}
