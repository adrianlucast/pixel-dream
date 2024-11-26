"use client";

import Lead from '@/core/model/Lead';
import Image from 'next/image';
import Link from 'next/link';

export interface LinhaLeadProps {
    lead: Lead;
}

export default function LinhaLead({ lead }: LinhaLeadProps) {
    const imageUrl = `https://robohash.org/${encodeURIComponent(lead.name)}?size=80x80`;

    return (
        <Link
            className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer hover:bg-zinc-800 transition duration-200"
            href={`/leads/${lead.id}`}
        >
            <Image
                src={imageUrl}
                width={80}
                height={80}
                className="rounded-full"
                alt={`Avatar de ${lead.name}`}
                onError={(e) => {
                    e.currentTarget.src = ""; // Oculta a imagem caso dê erro
                    e.currentTarget.style.display = "none";
                }}
            />
            <div
                className="w-20 h-20 rounded-full bg-zinc-700 flex items-center justify-center text-white text-lg font-bold"
                style={{ display: "none" }}
            >
                {lead.name[0]} {/* Fallback com a inicial do nome */}
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-black text-white">{lead.name}</span>
                <span className="text-sm text-zinc-400">{lead.situation}</span>
                <span className="text-sm text-zinc-400">{lead.post}</span>
            </div>
        </Link>
    );
}
