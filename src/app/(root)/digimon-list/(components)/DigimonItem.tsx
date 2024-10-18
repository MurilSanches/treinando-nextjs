import React from 'react'
import Image from 'next/image'
import { DigimonDetails } from '@/_types/digimon'
import Link from 'next/link'

// Função para buscar os dados do Digimon
const getDigimon = async (id: string): Promise<DigimonDetails> => {
  const res = await fetch(`https://digi-api.com/api/v1/digimon/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

// Componente de visualização do Digimon
const DigimonItem = async ({ id }: { id: string }) => {
  const digimonData = await getDigimon(id)

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen items-center">
      {/* Título do Digimon */}
      <h1 className="text-5xl font-bold text-center mb-8">{digimonData.name}</h1>

      {/* Imagem do Digimon */}
      <div className="flex justify-center mb-6">
        <Image
          src={digimonData.images[0].href}
          alt={digimonData.name}
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Descrição */}
      <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl">
        {
          digimonData.descriptions.find((desc) => desc.language === 'en_us')
            ?.description
        }
      </p>

      {/* Seção de Habilidades */}
      <Section title="Skills" content={digimonData.skills.map(skill => (
        <div key={skill.id} className="my-2">
          <h3 className="font-bold text-lg">{skill.skill}</h3>
          <p className="text-gray-600">{skill.description}</p>
        </div>
      ))} />

      {/* Seção de Níveis */}
      <Section title="Levels" content={digimonData.levels.map(level => (
        <div key={level.id} className="my-2">
          <h3 className="font-bold text-lg">{level.level}</h3>
        </div>
      ))} />

      {/* Seção de Tipos */}
      <Section title="Types" content={digimonData.types.map(type => (
        <div key={type.id} className="my-2">
          <h3 className="font-bold text-lg">{type.type}</h3>
        </div>
      ))} />

      {/* Seção de Atributos */}
      <Section title="Attributes" content={digimonData.attributes.map(attribute => (
        <div key={attribute.id} className="my-2">
          <h3 className="font-bold text-lg">{attribute.attribute}</h3>
        </div>
      ))} />

      {/* Evoluções Anteriores */}
      <EvolutionSection title="Prior Evolutions" evolutions={digimonData.priorEvolutions} />

      {/* Próximas Evoluções */}
      <EvolutionSection title="Next Evolutions" evolutions={digimonData.nextEvolutions} />
    </div>
  )
}

// Componente de Seção Genérica para Agrupar Habilidades, Níveis, etc.
const Section = ({ title, content }: { title: string, content: React.ReactNode }) => (
  <div className="w-full max-w-4xl mb-10">
    <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      {content}
    </div>
  </div>
)

// Componente de Seção de Evoluções
const EvolutionSection = ({ title, evolutions }: { title: string, evolutions: any[] }) => (
  <div className="w-full max-w-4xl mb-10">
    <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {evolutions.map(evolution => (
        <Link key={evolution.id} href={`/digimon-list/0/digimon/${evolution.id}`}>
          <div  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-lg">
            <Image
              src={evolution.image}
              alt={evolution.digimon}
              width={100}
              height={50}
              className="mb-4"
            />
            <h3 className="text-lg font-bold">{evolution.digimon}</h3>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

export default DigimonItem
