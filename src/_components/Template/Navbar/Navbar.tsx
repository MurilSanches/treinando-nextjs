'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className=" mx-auto self-end text-white hover:text-gray-300">
      <ul className="mt-4 flex">
        <li className="mb-2 px-2">
          <Link
            href="/"
            className={`block hover:text-white ${pathname === '/' ? 'font-bold text-waterBlue' : 'text-waterBlue-100'}`}
          >
            Home
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/about"
            className={`block hover:text-white ${pathname.includes('/about/') ? 'font-bold text-waterBlue' : 'text-waterBlue-100'}`}
          >
            Sobre
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/pokemon-list/0"
            className={`block hover:text-white ${pathname.includes('/pokemon-list/') ? 'font-bold text-waterBlue' : 'text-waterBlue-100'}`}
          >
            Pokemon
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/digimon-list/0"
            className={`block hover:text-white ${pathname.includes('/digimon-list/') ? 'font-bold text-waterBlue' : 'text-waterBlue-100'}`}
          >
            Digimon
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/one-piece"
            className={`block hover:text-white ${pathname.includes('/one-piece/') ? 'font-bold text-waterBlue' : 'text-waterBlue-100'}`}
          >
            One piece
          </Link>
        </li>
        <li className="mb-2 px-2">
          <Link
            href="/user-guide"
            className={`block hover:text-white ${pathname === '/user-guide/' ? 'font-bold text-waterBlue' : 'text-waterBlue-100'}`}
          >
            Guia de usuario
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
