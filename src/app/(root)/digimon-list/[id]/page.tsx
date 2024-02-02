import { Suspense } from 'react';
import DigimonList from "../(components)/DigimonList"

const Loading = () => (
    <div>Loading ....</div>
)

const DigimonListPage =  ({ params }: { params: { id: string} }) => {
    const { id } = params;
    return (
        <Suspense fallback={<Loading />}>
            <DigimonList id={id} />
        </Suspense>
    )
}

export default DigimonListPage