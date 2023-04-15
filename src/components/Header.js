import React, {useEffect, useState} from "react";
import * as Reactfeather from "react-feather"

export const Header = () => {
    const [theme, setTheme] = useState("light");
    

    useEffect(() => {
        const element = window.location.hash.slice(1)
        const activeLink = document.querySelector(`.${element ? element : "home"}`);
        activeLink.classList.add("active");
    })

    const ActiveLink = (e) => {
        const active = document.querySelector(".active");
        if (e.target.localName === "a") {
            active.classList.remove("active");
            e.target.classList.add("active")
        };
    }

    return (
        <header className="header">
            <img src={require("../assets/images/logo1.png")} width="45px" alt="" />
            <nav className="navigation" onClick={ActiveLink}>
                <a href="#home" className="home">Home</a>
                <a href="#about" className="about">About</a>
                <a href="#project" className="project">Project</a>
                <a href="#contact" className="contact">Contact</a>
            </nav>
            {
                theme === "light" ? 
                <Reactfeather.Moon onClick={() => setTheme("dark")} className="icon"/> : 
                <Reactfeather.Sun onClick={() => setTheme("light")} className="icon"/>
            }
        </header>
    )
}