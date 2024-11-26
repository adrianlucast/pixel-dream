"use server";

import Backend from "@/app/backend";
import Lead from "@/core/model/Lead";
import MaybeNew from "@/core/model/MaybeNew";

export async function submit(lead: MaybeNew<Lead>): Promise<Lead> {
    return await Backend.leads.salvar(lead as Lead);
}
