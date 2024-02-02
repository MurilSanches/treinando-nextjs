import React, { ReactNode } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface Layout {
  children: ReactNode
}

const Layout = ({ children }: Layout) => (
  <section className="flex min-h-screen w-full flex-col">
    <Header />
    <div className="min-h-screen">{children}</div>
    <Footer />
  </section>
)

export default Layout
