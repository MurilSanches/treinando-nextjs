import { POKEMON_URL } from '@/_constants/urls'
import type {PokemonList as PokemonListType} from '@/_types/pokemon'
import PokemonList from '../(components)/PokemonList'

const getData = async (page: number): Promise<PokemonListType> => {
  const res = await fetch(`${POKEMON_URL}/pokemon?limit=50&offset=${page*50}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async ({ params }: { params: { page: string }}) => {
  const { page } = params

  const data = await getData(parseInt(page))

  if (!data || !data.results || data.results.length === 0) {
    return <h1 className="text-center text-gray-500">Sem pokémons por enquanto.</h1>
  }

  return (
    <PokemonList data={data} page={parseInt(page)} />
  )
}

export default Page
