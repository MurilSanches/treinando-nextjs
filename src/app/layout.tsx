import "../styles/globals.css"

import { Metadata } from 'next'

interface IRootLayout {
  children: React.ReactNode,
  params: { lang: string }
}

export const metadata: Metadata = {
  title: 'TREINANDO NEXTJS',
  description: 'TREINANDO NEXTJS',
}

const RootLayout = ({ children, params }: IRootLayout) => {
  const {lang} = params
  return (
    <html lang={lang}>
      <body>
        {children}     
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'pt-BR' }, { lang: 'en-US' }]
}

export default RootLayout