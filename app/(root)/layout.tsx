import Layout from '_components/Template/Layout/Layout'
import { SidebarProvider } from '_context/sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => (
    <SidebarProvider>
        <Layout>
            {children}
        </Layout>
    </SidebarProvider>
)


export default layout