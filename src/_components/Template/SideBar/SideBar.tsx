'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/_components/ui/button'
import { useSidebar } from '@/_context/sidebar'

const Sidebar = () => {
  const pathname = usePathname()
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <aside
      className={`min-h-screen bg-gray-800 p-4 text-white shadow
                ${isOpen ? 'translate-x-0' : '-translate-x-3/4'}
            transition-transform duration-300 ease-in-out`}
    >
      {/* Botão de Fechar */}
      <Button
        onClick={toggleSidebar}
        className="absolute right-4 top-4 text-white hover:text-gray-300"
      >
        {isOpen ? 'Fechar' : 'Abrir'}
      </Button>
      <nav>
        <ul className="mt-4">
          <li className="mb-2">
            <Link
              href="/"
              className={`block hover:text-white ${pathname === '/' ? 'font-bold text-blue-500' : 'text-gray-300'}`}
            >
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/about"
              className={`block hover:text-white ${pathname.includes('/about/') ? 'font-bold text-blue-500' : 'text-gray-300'}`}
            >
              Sobre
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/pokemon"
              className={`block hover:text-white ${pathname.includes('/pokemon/') ? 'font-bold text-blue-500' : 'text-gray-300'}`}
            >
              Pokemon - React-Query (CSR)
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/digimon-list"
              className={`block hover:text-white ${pathname.includes('/digimon-list/') ? 'font-bold text-blue-500' : 'text-gray-300'}`}
            >
              Digimon (SSR)
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/user-guide"
              className={`block hover:text-white ${pathname === '/user-guide/' ? 'font-bold text-blue-500' : 'text-gray-300'}`}
            >
              Guia de usuario - React-Joyride
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
