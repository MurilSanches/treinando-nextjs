'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="absolute bottom-0 right-4 text-white hover:text-gray-300">
      <ul className="mt-4 flex ">
        <li className="mb-2 px-2">
          <Link
            href="/"
            className={`block hover:text-white ${pathname === '/' ? 'font-bold text-gray-600' : 'text-gray-300'}`}
          >
            Home
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/about"
            className={`block hover:text-white ${pathname.includes('/about/') ? 'font-bold text-gray-600' : 'text-gray-300'}`}
          >
            Sobre
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/pokemon"
            className={`block hover:text-white ${pathname.includes('/pokemon/') ? 'font-bold text-gray-600' : 'text-gray-300'}`}
          >
            Pokemon
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/digimon-list/0"
            className={`block hover:text-white ${pathname.includes('/digimon-list/') ? 'font-bold text-gray-600' : 'text-gray-300'}`}
          >
            Digimon
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/user-guide"
            className={`block hover:text-white ${pathname === '/user-guide/' ? 'font-bold text-gray-600' : 'text-gray-300'}`}
          >
            Guia de usuario
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
