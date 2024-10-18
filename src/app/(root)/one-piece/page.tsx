import Link from "next/link";

const categories = [
  {
    id: 3,
    title: "Personagens",
    imageSrc: "/images/characters.png", // Você pode adicionar uma imagem correspondente ao personagem
    link: "characters",
  },
  {
    id: 1,
    title: "Frutas",
    imageSrc: "/images/fruits.png", // Você pode adicionar uma imagem correspondente à fruta
    link: "fruits",
  },
  {
    id: 2,
    title: "Espadas",
    imageSrc: "/images/sword.png", // Você pode adicionar uma imagem correspondente à espada
    link: "swords",
  },


];

const BasePage = () => {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Explore o Mundo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={category.link}>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <Link
                href={category.link}
                className="text-blue-500 hover:underline"
              >
                Ver mais
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BasePage;
