import PokemonItem from '@/_components/Pages/Pokemon/PokemonItem'

const PokemonItemPage = ({ params }: { params: { id: string } }) => {
  const { id } = params
  return <PokemonItem id={id} />
}

export default PokemonItemPage
