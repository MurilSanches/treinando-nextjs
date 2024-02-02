const Projects = () => {
  // Aqui você pode adicionar informações sobre seus projetos
  const projects = [
    {
      title: 'Projeto A',
      description: 'Uma descrição breve do Projeto A.',
      link: 'https://linkdoprojetoA.com',
    },
    {
      title: 'Projeto B',
      description: 'Uma descrição breve do Projeto B.',
      link: 'https://linkdoprojetoB.com',
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <main className="p-4">
      <h2 className="text-3xl font-semibold mb-4">Meus Projetos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Projects;