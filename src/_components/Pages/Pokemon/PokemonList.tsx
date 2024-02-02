'use client'
import { useState } from 'react'
import { useQuery } from "react-query"
import Link from "next/link";

interface Pokemon {
    name: string;
    url: string;
}

const PokemonList = () => {
    const [page, setPage] = useState(0)

    const { isLoading, error, data } = useQuery({
        queryKey: ['poke', page],
        queryFn: () =>
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${page}`)
                .then(
                    (res) => res.json(),
                ),
        keepPreviousData: true,
    })

    if (isLoading) {
        return(
            <div>
                Carregando os pokemonss........
            </div>
        )
    }


    if (error) {
        return(
            <h1>Sem pokemons por enquanto</h1>
        )
    }

    if (!data || !data.results || data.results.length < 0) {
        return(
            <h1>Sem pokemons por enquanto</h1>
        )
    }

    const getUrlId = (url: string) => {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 2];
    }

    const handlePage = (val: number) => {
        if (page + val  < 0) {
            setPage(0)
            return
        }

        setPage(v => v + val)
    }

    return(
        <main className="p-4">            
            <div className="flex p-4 justify-between">
                <span 
                    className="cursor-pointer"
                    onClick={() => handlePage(-50)}
                >
                    anterior
                </span>
                <span
                    className="cursor-pointer"
                    onClick={() => handlePage(+50)}
                >
                    proximo
                </span>
            </div>
            {data.results.map((pokemon: Pokemon, index: number) => {
                const id = getUrlId(pokemon.url)
                return(
                    <div className="flex px-4 py-2" key={pokemon.name}>                    
                        <p className="font-bold">{index+1} - </p>
                        <Link className="uppercase px-2" href={`/pokemon/${id}`}>{pokemon.name}</Link>                        
                    </div>
                )
            })}
        </main>
    )
}

export default PokemonList
