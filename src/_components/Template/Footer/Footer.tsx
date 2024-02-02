import React from 'react'

const Footer = () => (
  <footer className="bg-blue-500 p-4 text-white">
    <div className="flex">
      <p>
        &copy; {new Date().getFullYear()} Meu Site. Todos os direitos
        reservados.
      </p>
    </div>
  </footer>
)

export default Footer
