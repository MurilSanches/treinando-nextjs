import Link from 'next/link'
import { PokemonList as PokemonListType } from '@/_types/pokemon'
import PokemonListItem from './PokemonListItem'

type PokemonListProps = {
  data: PokemonListType,
  page: number
}

const PokemonList = ({ data, page }: PokemonListProps) => {
  const getPageUrl = (val: number) => {
    if (page + val < 0) {
      return 0
    }
    return page+val
  }

  return(
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between w-full max-w-3xl mb-10">
        <Link href={`/pokemon-list/${getPageUrl(-1)}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Anterior
          </button>
        </Link>
        <Link href={`/pokemon-list/${getPageUrl(+1)}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Próximo
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        Pokemons
      </h1>

      <div className="bg-white rounded shadow p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.results.map((pokemon, index) => {

            const number = index + 1 + (page * 50)
            return (
              <PokemonListItem
                key={pokemon.name}
                pokemon={pokemon}
                number={number}
              />
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default PokemonList
