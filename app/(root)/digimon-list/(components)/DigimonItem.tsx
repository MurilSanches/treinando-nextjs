/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { DigimonDetails, Root } from "_types/digimon"

import Link from 'next/link'
import DigimonListItem from './DigimonListItem'
import Image from 'next/image'

const getDigimon = async (id: string): Promise<DigimonDetails> => {
    const res = await fetch(`https://digi-api.com/api/v1/digimon/${id}`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

/* T
const getDigimonAttribute = async (id: string): Promise<Root> => {
    const res = await fetch(`https://digi-api.com/api/v1/attribute/${id}`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
*/

const DigimonItem = async ({ id }: { id: string }) => {
    const handleIdChange = (val: number) => {
        if (parseInt(id) + val < 0) {
            return id
        }

        return parseInt(id) + val
    }

    const digimonData = await getDigimon(id)
    /* A
    const digimonAttribute = await getDigimonAttribute(id)
    */

    return (
        <div className='flex flex-col p-2'>
            <h1 className="text-5xl font-bold text-center py-5">{digimonData.name}</h1>   
            <div className='flex'>
                <Image className='m-auto' src={digimonData.images[0].href} alt={digimonData.name} width={400} height={300}/>               
            </div>
            <p className='flex p-2'>
                {digimonData.descriptions.find((desc) => desc.language === 'en_us')?.description}
            </p>
            <h2 className="text-xl font-bold text-center">
                Skills
            </h2>
            {digimonData.skills.map(skill => (
                <div key={skill.id} className='flex flex-col'>
                    {skill.id}
                    <h3>{skill.skill}</h3>
                    <p>{skill.description}</p>
                </div>
            ))}
            <h2 className="text-xl font-bold text-center">
                Levels
            </h2>
            {digimonData.levels.map(level => (
                <div key={level.id}>
                    {level.id}
                    <h3>{level.level}</h3>
                </div>    
            ))}
            <h2 className="text-xl font-bold text-center">
                Types
            </h2>
            {digimonData.types.map(type => (
                <div key={type.id}>
                    {type.id}
                    <h3>{type.type}</h3>
                </div>    
            ))}
            <h2 className="text-xl font-bold text-center">
                Attributes
            </h2>
            {digimonData.attributes.map(attribute => (
                <div key={attribute.id}>
                    {attribute.id}
                    <h3>{attribute.attribute}</h3>
                </div>    
            ))}

            <h2 className="text-xl font-bold text-center">
                Prior Evolutions
            </h2>
            <div className='flex flex-wrap'>
                {digimonData.priorEvolutions.map(pEvolutions => (                
                    <div key={pEvolutions.id} className='flex flex-col flex-1 basis-auto p-5 text-center'>
                        {pEvolutions.id}
                        <Image className="m-auto" src={pEvolutions.image} alt={digimonData.name} width={100} height={50}/>
                        <h3>{pEvolutions.digimon}</h3>
                    </div>                  
                ))}
            </div>

            <h2 className="text-xl font-bold text-center">
                Next Evolutions
            </h2>
            <div className='flex flex-wrap'>
                {digimonData.nextEvolutions.map(nEvolutions => (                
                    <div key={nEvolutions.id} className='flex flex-col flex-1 basis-auto p-5 text-center'>
                        {nEvolutions.id}
                        <Image className="m-auto" src={nEvolutions.image} alt={digimonData.name} width={100} height={50}/>
                        <h3>{nEvolutions.digimon}</h3>
                    </div>                  
                ))}
            </div>
        </div>
    )
}

export default DigimonItem