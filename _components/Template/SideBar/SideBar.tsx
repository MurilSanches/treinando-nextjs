'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useSidebar } from "_context/sidebar";

const Sidebar = () => {
    const pathname = usePathname()
    const { isOpen, toggleSidebar } = useSidebar();

    return(
        <aside
            className={`min-h-screen bg-gray-800 text-white p-4 shadow 
                ${isOpen ? "translate-x-0" : "-translate-x-3/4" }
            transition-transform duration-300 ease-in-out`}
        >
            {/* Botão de Fechar */}
            <Button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
                {isOpen ? "Fechar" : "Abrir"}
            </Button>
            <nav>
                <ul className="mt-4">
                    <li className="mb-2">
                        <Link href="/" className={`block hover:text-white ${pathname === '/' ? 'text-blue-500 font-bold' : 'text-gray-300'}`}>
                            Home
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/about" className={`block hover:text-white ${pathname.includes('/about/') ? 'text-blue-500 font-bold' : 'text-gray-300'}`}>
                            Sobre
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/pokemon" className={`block hover:text-white ${pathname.includes('/pokemon/') ? 'text-blue-500 font-bold' : 'text-gray-300'}`}>
                            Pokemon - React-Query (CSR)
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/digimon-list" className={`block hover:text-white ${pathname.includes('/digimon-list/') ? 'text-blue-500 font-bold' : 'text-gray-300'}`}>
                            Digimon (SSR)
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/user-guide" className={`block hover:text-white ${pathname === '/user-guide/' ? 'text-blue-500 font-bold' : 'text-gray-300'}`}>
                            Guia de usuario - React-Joyride
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
};

export default Sidebar;