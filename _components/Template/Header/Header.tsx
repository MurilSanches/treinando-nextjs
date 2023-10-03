'use client'

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname()

  return(
    <header className="w-full bg-blue-500 text-white p-4 relative">
      <div className="p-4">
        <h1 className="text-2xl font-semibold header-guide">Meu Site</h1>        
      </div>
      <nav className="absolute bottom-0 right-4 text-white hover:text-gray-300">
        <ul className="mt-4 flex ">
          <li className="mb-2 px-2">
            <Link href="/" className={`block hover:text-white ${pathname === '/' ? 'text-gray-600 font-bold' : 'text-gray-300'}`}>
              Home
            </Link>
          </li>
          <li className="mb-2 px-2">
            <Link href="/about" className={`block hover:text-white ${pathname.includes('/about/') ? 'text-gray-600 font-bold' : 'text-gray-300'}`}>
              Sobre
            </Link>
          </li>
          <li className="mb-2 px-2">
            <Link href="/pokemon" className={`block hover:text-white ${pathname.includes('/pokemon/') ? 'text-gray-600 font-bold' : 'text-gray-300'}`}>
              Pokemon
            </Link>
          </li>
          <li className="mb-2 px-2">
            <Link href="/digimon-list" className={`block hover:text-white ${pathname.includes('/digimon-list/') ? 'text-gray-600 font-bold' : 'text-gray-300'}`}>
              Digimon
            </Link>
          </li>
          <li className="mb-2 px-2">
            <Link href="/user-guide" className={`block hover:text-white ${pathname === '/user-guide/' ? 'text-gray-600 font-bold' : 'text-gray-300'}`}>
              Guia de usuario
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;