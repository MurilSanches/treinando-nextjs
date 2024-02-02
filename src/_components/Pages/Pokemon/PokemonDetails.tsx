'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Root } from '@/_types/pokemon'

interface IPokemonDetailsProps {
  data: Root
  handleChange: (val: number) => number
}

const PokemonDetails = ({ data, handleChange }: IPokemonDetailsProps) => (
  <div className="flex flex-col">
    <div className="flex justify-between p-4">
      <Link href="/pokemon">Voltar</Link>
      <div className="flex justify-between px-10">
        <Link className="px-2" href={`/pokemon/${handleChange(-1)}`}>
          Anterior
        </Link>
        <Link className="px-2" href={`/pokemon/${handleChange(+1)}`}>
          Próximo
        </Link>
      </div>
    </div>

    <h1 className="ml-6 mt-20 text-3xl font-bold uppercase">{data.name}</h1>

    <div className="ml-6 mt-10 flex w-3/12 rounded-lg border-2 border-solid border-black p-5">
      <div>
        <p className="flex">
          <span className="font-bold ">Peso:</span>
          {data.weight}
        </p>
        <p className="flex">
          <span className="font-bold">Altura:</span>
          {data.height}
        </p>
      </div>
    </div>

    <div className="mt-10 flex px-6">
      <div className="flex flex-col font-bold">
        Normal:
        <Image
          src={data.sprites?.front_default}
          alt={data.name}
          width={100}
          height={50}
        />
      </div>
      <div className="flex flex-col font-bold">
        Shiny:
        <Image
          src={data.sprites?.front_shiny}
          alt={data.name}
          width={100}
          height={50}
        />
      </div>
    </div>

    <h3 className="p-4 font-bold">Status:</h3>
    {data.stats?.map((stat) => (
      <div
        className="flex justify-between px-6 py-1 text-center"
        key={`stat${stat.stat.name}`}
      >
        <p className="font-bold uppercase">{stat.stat.name}:</p>
        <p className="text-center">{stat.base_stat}</p>
      </div>
    ))}

    <h3 className="p-4 font-bold">Habilidades:</h3>
    {data.abilities?.map((ability) => (
      <div className="px-6 py-1" key={`ability${ability.ability.name}`}>
        <p className="font-bold uppercase">{ability.ability.name}:</p>
        <p>{ability.is_hidden ? 'Invisivel' : 'Visivel'}</p>
      </div>
    ))}
  </div>
)

export default PokemonDetails
