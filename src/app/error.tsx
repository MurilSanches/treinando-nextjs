'use client'

// Os componentes de erro devem ser Client Components
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log o erro para um serviço de relatório de erros
    console.error(error)

    // Redirecionar para a página inicial após 5 segundos
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    // Limpar o timer se o componente for desmontado
    return () => clearTimeout(timer)
  }, [error, router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-gray-800">500</h1>
      <p className="text-2xl text-gray-600 mt-4">Página não encontrada</p>
      <p className="text-lg text-gray-500 mt-2">
        Você será redirecionado para a página inicial em alguns segundos...
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Tentar novamente
      </button>
    </div>
  )
}
