import React, { ReactNode } from "react"
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

interface Layout {
    children: ReactNode;
}

const Layout = ({ children }: Layout) =>(
    <section className="flex flex-col min-h-screen w-full">            
        <Header />
        <div className="min-h-screen">
            {children}
        </div>
        <Footer/>        
    </section>        
)


export default Layout