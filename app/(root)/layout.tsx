import Layout from '_components/Template/Layout/Layout'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => (
    <Layout>
        {children}
    </Layout>
)


export default layout