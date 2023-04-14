import React from "react";
import { Header, About, Footer, Home } from "./components";

const PortFolio = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Home />
                <About />
            </main>
            <Footer />
        </div>
    )
}

export default PortFolio;