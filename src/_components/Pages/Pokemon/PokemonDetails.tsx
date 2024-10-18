import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Root } from '@/_types/pokemon'

interface IPokemonDetailsProps {
  data: Root
  handleChange: (val: number) => number
}

const PokemonDetails = ({ data, handleChange }: IPokemonDetailsProps) => (
  <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
    {/* Header */}
    <div className="flex justify-between w-full max-w-3xl mb-6">
      <Link href="/pokemon" className="text-blue-500 hover:underline">
        Voltar
      </Link>
      <div className="flex space-x-4">
        <Link
          href={`/pokemon/${handleChange(-1)}`}
          className="text-blue-500 hover:underline"
        >
          Anterior
        </Link>
        <Link
          href={`/pokemon/${handleChange(+1)}`}
          className="text-blue-500 hover:underline"
        >
          Próximo
        </Link>
      </div>
    </div>

    {/* Nome do Pokémon */}
    <h1 className="text-5xl font-bold uppercase text-center text-gray-800 mb-10 bg-green-200 py-3 px-6 rounded-md shadow-lg">
      {data.name}
    </h1>

    {/* Peso e Altura */}
    <div className="flex justify-around text-center bg-white rounded-lg shadow-md p-6 w-full mb-10">
      <span className="text-lg font-semibold text-gray-600">Peso:</span> {data.weight}
      <span className="text-lg font-semibold text-gray-600">Altura:</span> {data.height}
    </div>

    {/* Imagens Normal e Shiny */}
    <div className="flex justify-around w-full max-w-md mb-10">
      <div className="flex flex-col items-center border p-4 rounded-lg shadow-md bg-gray-50">
        <span className="font-bold text-gray-700">Normal</span>
        <Image
          src={data.sprites?.front_default}
          alt={data.name}
          width={100}
          height={100}
          className="mt-2"
        />
      </div>
      <div className="flex flex-col items-center border p-4 rounded-lg shadow-md bg-gray-50">
        <span className="font-bold text-gray-700">Shiny</span>
        <Image
          src={data.sprites?.front_shiny}
          alt={`${data.name} shiny`}
          width={100}
          height={100}
          className="mt-2"
        />
      </div>
    </div>

    {/* Status */}
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6 mb-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Status:</h3>
      <div className="grid grid-cols-2 gap-4">
        {data.stats?.map((stat) => (
          <div
            className="flex flex-col bg-gray-50 p-3 rounded-lg shadow-sm"
            key={`stat${stat.stat.name}`}
          >
            <p className="font-bold uppercase text-gray-700">{stat.stat.name}:</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${stat.base_stat}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Habilidades */}
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Habilidades:</h3>
      <div className="space-y-3">
        {data.abilities?.map((ability) => (
          <div
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
            key={`ability${ability.ability.name}`}
          >
            <p className="font-bold uppercase text-gray-700">{ability.ability.name}:</p>
            <p className={ability.is_hidden ? 'text-red-500' : 'text-green-500'}>
              {ability.is_hidden ? 'Invisível' : 'Visível'}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default PokemonDetails
