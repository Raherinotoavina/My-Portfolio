import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import App from "./PortFolio";

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(
        <React.StrictMode>
            <App />  
        </React.StrictMode>
    )