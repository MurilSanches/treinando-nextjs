import DigimonItem from '../../../(components)/DigimonItem'

const DigimonItemPage = ({ params }: { params: { name: string } }) => {
  const { name } = params
  return <DigimonItem id={name} />
}

export default DigimonItemPage
