import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Digimon } from '@/_types/digimon'

type TDigimonListItemProps = {
  id: string
  digimon: Digimon
}

const DigimonListItem = ({ id, digimon }: TDigimonListItemProps) => (
  <Link href={`/digimon-list/${id}/digimon/${digimon.id}`}>
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg p-4 flex items-center space-x-4 mb-6">
      {/* Imagem do Digimon */}
      <div className="w-24 h-24 relative">
        <Image
          src={digimon.image}
          alt={digimon.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      {/* Nome do Digimon */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">{digimon.name}</h2>
        <p className="text-gray-500 text-sm">Clique para mais detalhes</p>
      </div>
    </div>
  </Link>
)

export default DigimonListItem
