function calcularIdade(dataNascimento: string): number {
  // Transformando a string em uma data
  const dataNasc = new Date(dataNascimento);

  // Pegando a data atual
  const dataAtual = new Date();

  // Calculando a diferença em milissegundos
  const diferencaEmMilissegundos = dataAtual.getTime() - dataNasc.getTime();

  // Convertendo a diferença de milissegundos para anos
  const anos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25)); // Considerando anos bissextos

  return anos;
}

export { calcularIdade }
