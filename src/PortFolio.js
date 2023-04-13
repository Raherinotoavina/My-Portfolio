import React from "react";
import { Header, Footer, Home } from "./components";

const PortFolio = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    )
}

export default PortFolio;