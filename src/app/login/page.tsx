'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaLightbulb } from 'react-icons/fa'; // Ícone correto

export default function LoginPage() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter(); 

    const handleLogin = async () => {
        if (usuario === 'admin' && senha === 'admin') {
            console.log('Login bem-sucedido');
            router.push('/leads'); 
        } else {
            console.log('Usuário ou senha inválidos');
            alert('Usuário ou senha inválidos!'); 
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="flex flex-col items-center text-center text-[#0cbfde] w-full max-w-md p-6">
                {/* Logo e texto de boas-vindas */}
                <h1 className="text-5xl font-extrabold text-white mb-4">
                    Pixel <span className="text-[#0cbfde]">Dream</span>
                </h1>
                <div className="flex items-center text-white mb-8">
                    <FaLightbulb className="text-4xl text-[#0cbfde] mr-2" />
                    <span className="text-lg text-white">Dados Precisos, Resultados Reais</span>
                </div>

                {/* Formulário de login com bordas arredondadas e visual mais fluido */}
                <div className="bg-[#222222] p-10 rounded-3xl shadow-2xl w-full">
                    <h2 className="text-2xl font-semibold text-center text-white mb-8">Login</h2>

                    <div className="flex flex-col gap-6">
                        {/* Campo de Usuário alinhado à esquerda */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="usuario" className="text-lg text-white font-bold text-left">Usuário</label>
                            <input
                                id="usuario"
                                type="text"
                                className="p-4 rounded-xl bg-transparent border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-[#0cbfde] transition-all placeholder-[#b0e1e3]"
                                placeholder="Digite seu usuário"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>

                        {/* Campo de Senha alinhado à esquerda */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="senha" className="text-lg text-white font-bold text-left">Senha</label>
                            <input
                                id="senha"
                                type="password"
                                className="p-4 rounded-xl bg-transparent border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-[#0cbfde] transition-all placeholder-[#b0e1e3]"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        {/* Botão de Login */}
                        <button
                            onClick={handleLogin}
                            className="bg-[#0cbfde] text-white px-6 py-3 rounded-md mt-6 w-full text-lg font-semibold transition-all hover:bg-[#069fa5] focus:outline-none focus:ring-2 focus:ring-[#069fa5]"
                        >
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
