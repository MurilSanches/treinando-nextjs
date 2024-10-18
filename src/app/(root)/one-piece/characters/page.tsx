'use client'

import { Character } from '@/_types/one-piece';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';

const CharacterList = () => {
  const { isLoading, error, data } = useQuery(['characters'], () =>
    fetch(`https://api.api-onepiece.com/v2/characters/en`).then((res) => res.json())
  );

  if (isLoading) {
    return <div className="text-center text-xl font-semibold">Carregando os personagens...</div>;
  }

  if (error) {
    return <h1 className="text-center text-red-500">Erro ao carregar os personagens.</h1>;
  }

  if (!data || !data.length) {
    return <h1 className="text-center text-gray-500">Sem personagens por enquanto.</h1>;
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded shadow p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((character: Character) => (
            <li key={character.id} className="flex flex-col items-center p-4 border rounded hover:bg-gray-50 transition-all">
              <h2 className="text-lg font-bold">{character.name}</h2>
              <Link href={`${character.id}`} className="mt-2 text-blue-600 hover:underline">
                Ver detalhes
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CharacterList
