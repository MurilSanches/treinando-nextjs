import DigimonList from '../(components)/DigimonList'

const DigimonListPage = ({ params }: { params: { id: string } }) => {
  const { id } = params
  return <DigimonList id={id} />
}

export default DigimonListPage
