'use client'
import { Sword } from '@/_types/one-piece';
import { useQuery } from 'react-query';

const SwordDetail = () => {
  const { isLoading, error, data } = useQuery(['sword'], () =>
    fetch(`https://api.api-onepiece.com/v2/swords/en`).then((res) => res.json())
  );

  if (isLoading) {
    return <div className="text-center text-xl font-semibold">Carregando as espadas...</div>;
  }

  if (error) {
    return <h1 className="text-center text-red-500">Erro ao carregar as espadas.</h1>;
  }

  if (!data || !data.length) {
    return <h1 className="text-center text-gray-500">Sem espadas por enquanto.</h1>;
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
    <div className="bg-white rounded shadow p-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((sword: Sword) => (
          <li key={sword.id} className="flex flex-col items-center p-4 border rounded hover:bg-gray-50 transition-all">
            <h2 className="text-lg font-bold">{sword.name}</h2>
            <p className="text-gray-500 text-sm">{sword.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </main>
  );
};

export default SwordDetail;
