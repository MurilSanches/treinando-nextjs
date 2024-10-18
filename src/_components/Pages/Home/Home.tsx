import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <main className="p-4">
    {/* Seção de Boas-vindas com imagem de fundo */}
    <div className="relative mb-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white shadow-lg">
      <h1 className="mb-4 text-5xl font-extrabold">Bem-vindo ao Mundo Digital!</h1>
      <p className="text-lg">
        Explore o universo incrível de <span className="font-bold">Pokémon</span> e <span className="font-bold">Digimon</span>.
        Mergulhe em aventuras épicas e descubra criaturas extraordinárias!
      </p>
      {/* Adicionando uma imagem temática de fundo */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/background-digimon-pokemon.jpg" alt="Background" layout="fill" objectFit="cover" />
      </div>
    </div>

    {/* Últimas Atualizações como cards */}
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6">Últimas Atualizações</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Novos Tutoriais de React</h3>
          <p className="text-gray-600">
            Descubra as últimas dicas e truques sobre como criar aplicativos incríveis com React.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2">Dicas de Desenvolvimento Web</h3>
          <p className="text-gray-600">
            Explore novas técnicas de desenvolvimento web e otimize sua performance.
          </p>
        </div>
      </div>
    </section>

    {/* Seção de Exploração: Pokémon e Digimon */}
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore os Mundos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pokémon */}
        <Link href="/pokemon-list/0">
          <div className="group block rounded-lg bg-yellow-400 p-8 text-center text-white shadow-lg transition hover:scale-105 hover:shadow-xl">

            <h3 className="mt-4 text-2xl font-bold group-hover:text-yellow-600">Pokémon</h3>
            <p className="mt-2">Descubra a lista completa dos Pokémon mais famosos e suas evoluções.</p>
          </div>
        </Link>

        {/* Digimon */}
        <Link href="/digimon-list/0">
          <div className="group block rounded-lg bg-blue-500 p-8 text-center text-white shadow-lg transition hover:scale-105 hover:shadow-xl">

            <h3 className="mt-4 text-2xl font-bold group-hover:text-blue-700">Digimon</h3>
            <p className="mt-2">Veja a lista completa dos Digimons e suas evoluções incríveis.</p>
          </div>
        </Link>
      </div>
    </section>

    {/* Link adicional sobre o criador */}
    <div className="text-center mt-12">
      <Link href="/about">
        <div className="text-lg text-blue-600 hover:underline">
          Saiba mais sobre o criador do site
        </div>
      </Link>
    </div>
  </main>
)

export default Home
