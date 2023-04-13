import React from "react";
import { LinkOut } from "./LinkOut";
import { LinkEmail } from "./LinkEmail";

export const Home = () => {
    return (
        <section className="Home">
            <LinkOut />
            <div className="home__content">
                <img src={require("../assets/images/langages/react.png")} className="react__logo" width="10%" alt="" />
                <h1 className="home__content-1">Hi, My Name is </h1>
                <p className="home__content-2">RAHERINOTOAVINA.</p>
                <h3 className="home__content-3">I'm a web developer.</h3>
                <a href="#about">
                    <button className="btn btn-start">Click here to start</button>
                </a>
            </div>
            <LinkEmail />
        </section>
    )
}