import React from "react";
import { Header, About, Footer, Home, Project } from "./components";

const PortFolio = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Home />
                <About />
                <Project />
            </main>
            <Footer />
        </div>
    )
}

export default PortFolio;