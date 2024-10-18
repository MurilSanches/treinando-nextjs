"use client";

import { Fragment } from "react";
import { useQuery } from "react-query";

const CharacterDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const { isLoading, error, data } = useQuery(["character", id], () =>
    fetch(`https://api.api-onepiece.com/v2/characters/en/${id}`).then((res) =>
      res.json(),
    ),
  );

  if (isLoading) {
    return (
      <div className="text-center text-xl font-semibold">
        Carregando detalhes do personagem...
      </div>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500">
        Erro ao carregar detalhes do personagem.
      </h1>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded shadow p-4">
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

        <div className="mb-4">
          <strong>Idade:</strong> {data.age}
        </div>
        <div className="mb-4">
          <strong>Tamanho:</strong> {data.size}
        </div>
        <div className="mb-4">
          <strong>Recompensa:</strong> {data.bounty}
        </div>
        <div className="mb-4">
          <strong>Trabalho:</strong> {data.job}
        </div>
        <div className="mb-4">
          <strong>Status:</strong> {data.status}
        </div>

        <div className="mb-4">
          <strong>Equipe:</strong>
          <p>
            {data.crew.name} (Status: {data.crew.status})
          </p>
        </div>

        <div className="mb-4">
          <strong>Fruta:</strong>
          {data.fruit ? (
            <Fragment>
              <p>
                {data.fruit.name} - {data.fruit.description}
              </p>
              <img
                src={data.fruit.filename}
                alt={data.fruit.name}
                className="w-48 h-48 object-cover rounded"
              />
            </Fragment>
          ) : (
            <p>Não possui fruta</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
