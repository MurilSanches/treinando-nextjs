import React from 'react'

import { Digimon, Root } from "_types/digimon"

import Link from 'next/link'
import DigimonListItem from './DigimonListItem'

const getData = async (page: string): Promise<Root> => {
    const res = await fetch(`https://digi-api.com/api/v1/digimon?page=${page}&pageSize=10`)

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
        <main className="w-3/4 p-4">
            <div className="flex justify-between">
                <Link href={`/digimon-list/${handleIdChange(-1)}`}>
                    Anterior
                </Link>
                <Link href={`/digimon-list/${handleIdChange(+1)}`}>
                    Proximo
                </Link>
            </div>
            <h1 className="font-bold text-3xl uppercase ml-6 mt-20" >List de Digimons</h1>            
            {data.content.map((digimon: Digimon) => (
                <DigimonListItem 
                    key={digimon.id} 
                    id={id}
                    digimon={digimon} 
                />
            ))}
        </main>
    )
}

export default DigimonList