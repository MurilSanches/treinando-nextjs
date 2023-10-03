import React from "react";

const Footer = () => (
    <footer className="bg-blue-500 text-white p-4">
      <div className="flex">
        <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
)

export default Footer;