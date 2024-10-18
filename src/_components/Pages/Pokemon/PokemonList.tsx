'use client'

import { useState } from 'react'
import { useQuery } from 'react-query'
import Link from 'next/link'

interface Pokemon {
  name: string
  url: string
}

const PokemonList = () => {
  const [page, setPage] = useState(0)

  const { isLoading, error, data } = useQuery({
    queryKey: ['poke', page],
    queryFn: () =>
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${page}`).then(
        (res) => res.json()
      ),
    keepPreviousData: true
  })

  if (isLoading) {
    return <div className="text-center text-xl font-semibold">Carregando os pokémons...</div>
  }

  if (error) {
    return <h1 className="text-center text-red-500">Erro ao carregar os pokémons.</h1>
  }

  if (!data || !data.results || data.results.length === 0) {
    return <h1 className="text-center text-gray-500">Sem pokémons por enquanto.</h1>
  }

  const getUrlId = (url: string) => {
    const urlParts = url.split('/')
    return urlParts[urlParts.length - 2]
  }

  const handlePage = (val: number) => {
    if (page + val < 0) {
      setPage(0)
      return
    }
    setPage((v) => v + val)
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4 bg-white rounded shadow mb-4">
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors"
          onClick={() => handlePage(-50)}
        >
          Anterior
        </button>
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors"
          onClick={() => handlePage(+50)}
        >
          Próximo
        </button>
      </div>
      <div className="bg-white rounded shadow p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.results.map((pokemon: Pokemon, index: number) => {
            const id = getUrlId(pokemon.url)
            return (
              <li
                key={pokemon.name}
                className="flex items-center justify-between p-4 border rounded hover:bg-gray-50 transition-all"
              >
                <span className="font-bold text-gray-700">{index + 1 + page} - </span>
                <Link className="ml-2 text-blue-600 hover:underline uppercase" href={`/pokemon/${id}`}>
                  {pokemon.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default PokemonList
