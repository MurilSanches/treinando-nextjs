'use client'

import { useRouter } from 'next/navigation'

const Parallel = () => {
  const router = useRouter()
  return (
    <main className="p-4">
      <span className="cursor-pointer font-bold" onClick={() => router.back()}>
        Voltar
      </span>
      <h1 className="text-4xl font-bold">Parallel teste</h1>
    </main>
  )
}

export default Parallel
