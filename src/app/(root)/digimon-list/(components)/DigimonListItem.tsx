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
    <div className="flex p-6">
      <Image src={digimon.image} alt={digimon.name} width={100} height={50} />
      <span className="text-xl font-bold">{digimon.name}</span>
    </div>
  </Link>
)

export default DigimonListItem
