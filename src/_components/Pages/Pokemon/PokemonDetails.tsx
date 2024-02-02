'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Root } from "_types/pokemon";

interface IPokemonDetailsProps {
  data: Root,
  handleChange: (val: number) => number,
}

const PokemonDetails = ({ data, handleChange }: IPokemonDetailsProps) => (
  <div className="flex flex-col">
    <div className="flex justify-between p-4">
      <Link href="/pokemon">Voltar</Link>
      <div className="flex justify-between px-10">
        <Link className="px-2" href={`/pokemon/${handleChange(-1)}`}>Anterior</Link>
        <Link className="px-2" href={`/pokemon/${handleChange(+1)}`}>Próximo</Link>
      </div>          
    </div>

    <h1 className="font-bold text-3xl uppercase ml-6 mt-20" >{data.name}</h1>

    <div className="flex border-2 border-solid border-black rounded-lg p-5 w-3/12 ml-6 mt-10">
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

    <div className="flex px-6 mt-10">
      <div className="flex flex-col font-bold">
        Normal:
        <Image src={data.sprites?.front_default} alt={data.name} width={100} height={50} />
      </div>
      <div className="flex flex-col font-bold">
        Shiny:
        <Image src={data.sprites?.front_shiny} alt={data.name} width={100} height={50} />
      </div>
    </div>

    <h3 className="font-bold p-4">Status:</h3>
    {data.stats?.map((stat)=> (
      <div className="flex justify-between py-1 px-6 text-center" key={`stat${stat.stat.name}`}>
        <p className="font-bold uppercase">{stat.stat.name}:</p>
        <p className="text-center">{stat.base_stat}</p>            
      </div>
    ))}

    <h3 className="font-bold p-4">Habilidades:</h3>
    {data.abilities?.map((ability) => (
      <div className="py-1 px-6" key={`ability${ability.ability.name}`}>            
        <p className="font-bold uppercase">{ability.ability.name}:</p>
        <p>{ability.is_hidden? "Invisivel" : "Visivel"}</p>
      </div>
    ))}
  </div>
)


export default PokemonDetails;
