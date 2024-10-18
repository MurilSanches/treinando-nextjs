import React from 'react'
import Link from 'next/link'
import DigimonListItem from './DigimonListItem'
import { Digimon, Root } from '@/_types/digimon'

// Função para buscar os dados da API de Digimons
const getData = async (page: string): Promise<Root> => {
  const res = await fetch(
    `https://digi-api.com/api/v1/digimon?page=${page}&pageSize=10`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const DigimonList = async ({ id }: { id: string }) => {
  const handleIdChange = (val: number) => {
    if (parseInt(id) + val < 0) {
      return id
    }
    return parseInt(id) + val
  }

  const data = await getData(id)

  return (
    <main className="p-8 flex flex-col items-center bg-gray-100 min-h-screen">
      {/* Navegação entre páginas */}
      <div className="flex justify-between w-full max-w-3xl mb-10">
        <Link href={`/digimon-list/${handleIdChange(-1)}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Anterior
          </button>
        </Link>
        <Link href={`/digimon-list/${handleIdChange(+1)}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Próximo
          </button>
        </Link>
      </div>

      {/* Título */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
       Digimons
      </h1>

      {/* Grid Responsivo de Digimons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {data.content.map((digimon: Digimon) => (
          <DigimonListItem key={digimon.id} id={id} digimon={digimon} />
        ))}
      </div>
    </main>
  )
}

export default DigimonList
