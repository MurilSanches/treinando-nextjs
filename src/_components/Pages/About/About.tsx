import React from 'react'

import Link from 'next/link'

const About = () => (
  <main className="p-4">
    <h1 className="mb-4 text-3xl font-semibold">Sobre Nós</h1>
    <p className="text-gray-600">
      Bem-vindo à página &quot;Sobre Nós&quot; do meu projeto. Meu nome é
      Murilo, e sou um desenvolvedor front-end apaixonado por criar interfaces
      web incríveis. Tenho 20 anos e sou especializado em tecnologias como
      ReactJS, React TS e Node.js.
    </p>
    <p className="mt-4 text-gray-600">
      Este projeto foi criado para compartilhar meu conhecimento e experiência
      em programação, além de me permitir explorar meu interesse em jogos, como
      Valorant, CS:GO e League of Legends. Se você compartilha desses interesses
      ou simplesmente quer saber mais sobre mim, fique à vontade para explorar
      este site.
    </p>
    <div className="flex flex-col py-4">
      <Link href="/pokemon/1">Lista de Pokemons</Link>
      <Link href="/about/parallel">Meus projetos</Link>
    </div>
  </main>
)

export default About
