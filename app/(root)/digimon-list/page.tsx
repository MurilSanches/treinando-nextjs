/* T
import { Digimon, Root } from "_types/digimon"
import Image from "next/image"


const getData = async (): Promise<Root> => {
    
    const res = await fetch('https://api.example.com/...')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
    
}
*/   

const DigimonList = async () => {
    // Const data = await getData()
 
    const teste = "teste"

    return (
        <main className="w-3/4 p-4">
            <h1 className="font-bold text-3xl uppercase ml-6 mt-20" >List de Digimons</h1>
            {teste}
            {/*{data.content.map((i: Digimon) => (
                <div key={i.id} className="flex p-6">
                    <Image src={i.image} alt={i.name} width={100} height={50}/>
                    <span className="text-xl font-bold">{i.name}</span>
                </div>
            ))}*/}
        </main>
    )
}

export default DigimonList