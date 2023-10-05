import Link from "next/link";
import React from "react";

const Home = () => (
  <main className="p-4">
    <div className="bg-blue-500 text-white p-8 rounded shadow-lg mb-4">
      <h1 className="text-4xl font-semibold mb-2">Bem-vindo ao Meu Site</h1>
      <p className="text-lg">Explore, aprenda e divirta-se.</p>
    </div>

    <h2 className="text-2xl font-semibold mb-4">Últimas Atualizações</h2>
    <ul className="list-disc list-inside">
      <li>
        <p className="text-gray-600">Novos tutoriais de React publicados.</p>
      </li>
      <li>
        <p className="text-gray-600">Dicas de desenvolvimento web em nosso blog.</p>
      </li>
    </ul>

    <div className="mt-8">
      <Link href="/about" className="text-blue-500 hover:underline">
        Saiba mais sobre mim
      </Link>
    </div>
  </main>
);


export default Home;