'use client'
import Layout from '@/_components/Template/Layout/Layout'

import { QueryClient, QueryClientProvider } from 'react-query'

interface LayoutProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

const layout = ({ children }: LayoutProps) => (
  <QueryClientProvider client={queryClient}><Layout>{children}</Layout></QueryClientProvider>
)

export default layout
