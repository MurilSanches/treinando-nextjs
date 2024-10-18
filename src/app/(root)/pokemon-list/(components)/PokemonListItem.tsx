import Link from 'next/link'
import React from 'react'

import { PokemonListItem as PokemonListItemType, Root } from '@/_types/pokemon'
import Image from 'next/image'

interface PokemonListItemProps {
  pokemon: PokemonListItemType
  number: number
}

const getData = async (url: string): Promise<Root> => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const PokemonListItem = async ({ number, pokemon }: PokemonListItemProps) => {
  const getUrlId = (url: string) => {
    const urlParts = url.split('/')
    return urlParts[urlParts.length - 2]
  }

  const id = getUrlId(pokemon.url)

  const morePokemonData = await getData(pokemon.url)

  if (!morePokemonData)
    return (
      <Link href={`pokemon/${id}`}>
        <li
          className="flex items-center justify-between p-4 border rounded transform transition-transform hover:scale-105 hover:shadow-lg"
        >
          <span className="font-bold text-gray-700">{number} - </span>
          <span  className="ml-2 text-blue-600 hover:underline uppercase" >
            {pokemon.name}
          </span>
        </li>
      </Link>
    )

    return (
      <Link href={`pokemon/${id}`}>
        <li
          className="flex flex-col items-center justify-between p-4 border rounded transform transition-transform hover:scale-105 hover:shadow-lg"
        >
          <span className="font-bold text-gray-700">{number}</span>
          <Image
            src={morePokemonData.sprites?.front_default}
            alt={morePokemonData.name}
            width={100}
            height={100}
            className="mt-2"
          />
          <span  className="ml-2 text-blue-600 hover:underline uppercase" >
            {pokemon.name}
          </span>
        </li>
      </Link>
    )
}

export default PokemonListItem
