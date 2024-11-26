'use server'

import Lead from '@/core/model/Lead'
import RepositorioLead from './RepositorioLeads'

export default async function obterTodos(){
    return RepositorioLead.obterTodos()
}