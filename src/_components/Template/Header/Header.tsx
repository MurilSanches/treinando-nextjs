import { Nabla } from 'next/font/google'
import Link from 'next/link'

import Navbar from '../Navbar/Navbar'

const nabla = Nabla({ subsets: ['latin'] })

const Header = () => (
  <header className="relative flex h-[20rem] w-full flex-col justify-between border-b border-waterBlue bg-yellow p-4 text-white drop-shadow-lg">
    <div className="mx-auto w-fit p-4">
      <Link href="/" className="cursor-pointer">
        <h1
          className={`header-guide mt-5 text-center text-7xl font-semibold text-waterBlue ${nabla.className}`}
        >
          Murilão
        </h1>
      </Link>
    </div>
    <Navbar />
  </header>
)

export default Header
