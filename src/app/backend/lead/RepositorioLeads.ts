import Lead from "@/core/model/Lead";
import { PrismaClient, Lead as LeadEntity } from "@prisma/client";

export default class RepositorioLead {
    private static db: PrismaClient = new PrismaClient()

    
    static async salvar(lead: Lead): Promise<Lead> {
        return await this.db.lead.upsert({
            where: {id: lead.id},
            update: lead,
            create: lead
        })
    }

    static async obterTodos(): Promise<Lead[]> {
        return await this.db.lead.findMany()
    }

    static async obterPorID(id: string): Promise<Lead | null>{
        const lead = await this.db.lead.findUnique({
            where: {id},
        })

        return lead
    }

}