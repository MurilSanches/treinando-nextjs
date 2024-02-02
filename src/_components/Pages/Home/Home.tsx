import React from 'react'

import Link from 'next/link'

const Home = () => (
  <main className="p-4">
    <div className="mb-4 rounded bg-blue-500 p-8 text-white shadow-lg">
      <h1 className="mb-2 text-4xl font-semibold">Bem-vindo ao Meu Site</h1>
      <p className="text-lg">Explore, aprenda e divirta-se.</p>
    </div>

    <h2 className="mb-4 text-2xl font-semibold">Últimas Atualizações</h2>
    <ul className="list-inside list-disc">
      <li>
        <p className="text-gray-600">Novos tutoriais de React publicados.</p>
      </li>
      <li>
        <p className="text-gray-600">
          Dicas de desenvolvimento web em nosso blog.
        </p>
      </li>
    </ul>

    <div className="mt-8">
      <Link href="/about" className="text-blue-500 hover:underline">
        Saiba mais sobre mim
      </Link>
    </div>
  </main>
)

export default Home
