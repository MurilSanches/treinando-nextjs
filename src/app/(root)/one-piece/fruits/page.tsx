'use client'

import { useQuery } from 'react-query';
import { Fruit } from '@/_types/one-piece';

const FruitList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['fruits'],
    queryFn: () =>
      fetch(`https://api.api-onepiece.com/v2/fruits/en`).then(
        (res) => res.json()
      ),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div className="text-center text-xl font-semibold">Carregando as frutas...</div>;
  }

  if (error) {
    return <h1 className="text-center text-red-500">Erro ao carregar as frutas.</h1>;
  }

  if (!data || !data.length) {
    return <h1 className="text-center text-gray-500">Sem frutas por enquanto.</h1>;
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded shadow p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((fruit: Fruit) => (
            <li key={fruit.id} className="flex flex-col items-center p-4 border rounded hover:bg-gray-50 transition-all">
              <img src={fruit.filename} alt={fruit.name} className="w-24 h-24 object-cover mb-2" />
              <h2 className="text-lg font-bold">{fruit.name}</h2>
              <p className="text-gray-500 text-sm">{fruit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default FruitList;
