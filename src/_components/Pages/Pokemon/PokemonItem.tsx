'use client'

import React from "react";
import { useQuery } from "react-query"

import { Root } from "../../../_types/pokemon";
import PokemonDetails from "./PokemonDetails";

const PokemonItem = ({ id }: { id: string }) => {
    const handlePokemonIndex = (val: number) => {
        let newId
        if(parseInt(id) + val <= 0) {
          newId = parseInt(id)
        }
        else {
          newId = parseInt(id) + val
        }
        
        return newId
    }; 
    

    const { isLoading, error, data } = useQuery<boolean, unknown, Root>({
        queryKey: ["pokemonDetail", id], // Include the ID in the query key
        queryFn: () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()),
    });

    if (isLoading) {
        return(
        <div>
            Carregando o pokemon........
        </div>
        )
    }


    if (error) {
        return(
        <h1>Sem pokemon por enquanto</h1>
        )
    }

    if (!data) {
        return(          
        <h1>Sem pokemon por enquanto</h1>          
        )
    }


    return (
        <PokemonDetails 
            data={data}
            handleChange={handlePokemonIndex} 
        />
    );
};

export default PokemonItem;
