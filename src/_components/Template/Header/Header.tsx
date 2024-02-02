import Link from 'next/link'

import Navbar from '../Navbar/Navbar'

const Header = () => (
  <header className="relative w-full bg-blue-500 p-4 text-white">
    <div className="p-4">
      <Link href="/" className="cursor-pointer">
        <h1 className="header-guide text-2xl font-semibold">Meu Site</h1>
      </Link>
    </div>
    <Navbar />
  </header>
)

export default Header
