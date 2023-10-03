'use client'

import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

interface PokemonLayoutProps {
    children: React.ReactNode
}
  
const PokemonLayout =({ children }: PokemonLayoutProps) => ( 
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default PokemonLayout