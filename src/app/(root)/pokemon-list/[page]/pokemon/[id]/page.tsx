import React from 'react'

import PokemonDetails from '../../../(components)/PokemonDetails'
import { Root } from '@/_types/pokemon'
import { POKEMON_URL } from '@/_constants/urls'

const getData = async (id: string): Promise<Root> => {
  const res = await fetch(`${POKEMON_URL}/pokemon/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async ({ params }: { params: { page: string, id: string } }) => {
  const { id } = params
  const data = await getData(id)

  return <PokemonDetails data={data} params={params} />
}

export default Page
