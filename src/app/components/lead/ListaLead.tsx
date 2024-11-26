import Lead from '@/core/model/Lead'
import LinhaLead from './LinhaLead'

export interface ListaLeadProps {
    leads: Lead[]
}

export default function leadLead(props: ListaLeadProps) {
    return <div className="flex flex-col gap-4">
        {props.leads.map((lead: Lead) => {
            return <LinhaLead key={lead.id} lead={lead} />
        })}
    </div>
}