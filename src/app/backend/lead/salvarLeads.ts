'use server'

import Lead from '@/core/model/Lead'
import Id from '@/core/utils/Id'
import RepositorioLead from './RepositorioLeads'
import MaybeNew from '@/core/model/MaybeNew'



export default async function salvarLead(lead: MaybeNew<Lead>) {
    const novoLead: Lead = {
        ...lead,
        id: lead.id ?? Id.novo,
    }

    return RepositorioLead.salvar(novoLead)
}