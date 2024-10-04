const Footer = () => (
  <footer className="border-t border-waterBlue bg-yellow p-4 text-waterBlue drop-shadow-lg">
    <div className="flex">
      <p>
        &copy; {new Date().getFullYear()} Meu Site. Todos os direitos
        reservados.
      </p>
    </div>
  </footer>
)

export default Footer
