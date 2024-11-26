import { IconHome, IconRegistered, IconUser, IconBulb } from "@tabler/icons-react";
import Link from "next/link";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <aside className="w-72 bg-[#0f0f0f] h-screen p-8 shadow-md">
            <nav className="flex flex-col gap-6">

                {/* Logo da empresa */}
                <div className="flex flex-col items-center mb-12">
                    <div className="flex items-center mb-4">
                        <IconBulb size={28} color="#0cbfde" />
                        <h1 className="text-3xl font-semibold text-[#0cbfde] ml-3">Pixel Dream</h1>
                    </div>
                    <p className="text-base text-gray-400 text-center font-light">
                        Dados Precisos, Resultados Reais
                    </p>
                </div>

                {/* Itens do menu */}
                <MenuItem icone={IconHome} texto="Início" url="/dashboard"/>
                <MenuItem icone={IconUser} texto="Cadastro Lead" url="/leads"/>
                <MenuItem icone={IconRegistered} texto="Cadastro Post" url="/posts"/>
            </nav>
        </aside>
    );
}
