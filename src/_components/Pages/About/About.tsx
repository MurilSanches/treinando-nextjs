import React from 'react'
import Link from 'next/link'
import { calcularIdade } from '@/_helper/calculateAge'

const About = () => {
  return(
  <main className="flex flex-col items-center p-4">
    {/* Cabeçalho com imagem de fundo */}

    {/* Seção de introdução */}
    <section className="w-full max-w-3xl text-center mb-8">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Sobre Nós</h1>
      <p className="text-lg text-gray-700 mb-4">
        Bem-vindo à página &quot;Sobre Nós&quot; do meu projeto. Meu nome é <strong>Murilo</strong>,
        e sou um desenvolvedor front-end apaixonado por criar interfaces web incríveis.
        Tenho {calcularIdade('2003-08-06')} anos e sou especializado em tecnologias como <span className="font-bold text-blue-600">ReactJS</span>,
        <span className="font-bold text-blue-600"> React TS</span> e <span className="font-bold text-blue-600">Node.js</span>.
      </p>
      <p className="text-lg text-gray-700">
        Este projeto foi criado para compartilhar meu conhecimento e experiência em programação, além de explorar
        meu interesse em jogos como <span className="font-bold">Valorant</span>, <span className="font-bold">CS:GO</span> e
        <span className="font-bold"> League of Legends</span>. Se você compartilha desses interesses, fique à vontade para explorar o site!
      </p>
    </section>

    {/* Links para outras páginas com botões estilosos */}
    <section className="w-full max-w-2xl flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">Explore mais</h2>
      <div className="flex gap-4 mb-8">
        <Link href="/pokemon-list/0">
          <div className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
            Lista de Pokémons
          </div>
        </Link>
        <Link href="/about/parallel">
          <div className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Meus Projetos
          </div>
        </Link>
      </div>
    </section>

    {/* Texto final para engajar o usuário */}
    <section className="w-full max-w-2xl text-center">
      <p className="text-lg text-gray-700">
        Se você quiser saber mais sobre minha jornada, meus projetos ou até trocar uma ideia sobre desenvolvimento e jogos,
        não hesite em me contatar! Continue navegando e aproveite o conteúdo do site.
      </p>
    </section>
  </main>
)
}

export default About
