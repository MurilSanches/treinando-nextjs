import Link from 'next/link'

const NotFoundPage = () =>  (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Imagem tematica */}

      {/* Mensagem de Erro */}
      <h1 className="text-6xl font-extrabold text-blue-500">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Oops! Parece que você se perdeu...</h2>
      <p className="mt-2 text-lg text-gray-600">
        Não conseguimos encontrar a página que você estava procurando. Mas não se preocupe, ainda há muito para explorar!
      </p>

      {/* Botão de Redirecionamento */}
      <div className="mt-8">
        <Link href="/">
          <a className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Voltar para a Página Inicial
          </a>
        </Link>
      </div>

      {/* Link para explorar mais conteúdo */}
      <div className="mt-4">
        <Link href="/pokemon-list">
          <a className="text-blue-500 hover:underline">Explorar Pokémon</a>
        </Link>
        {' '}ou{' '}
        <Link href="/digimon">
          <a className="text-blue-500 hover:underline">Explorar Digimon</a>
        </Link>
      </div>
    </main>
  )


export default NotFoundPage
