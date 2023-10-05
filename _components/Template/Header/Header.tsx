import Link from "next/link";
import Navbar from "../Navbar/Navbar";

const Header = () => (
  <header className="w-full bg-blue-500 text-white p-4 relative">
    <div className="p-4">
      <Link href="/" className="cursor-pointer">
        <h1 className="text-2xl font-semibold header-guide">Meu Site</h1>
      </Link>        
    </div>
    <Navbar />
  </header>
)

export default Header;