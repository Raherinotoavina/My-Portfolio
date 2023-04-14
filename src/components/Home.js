import React, { useEffect } from "react";
import { LinkOut } from "./LinkOut";
import { LinkEmail } from "./LinkEmail";

export const Home = () => {

    useEffect(() => {
        const header = document.querySelector(".header");
        let observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                header.classList.add("header-fixed");
            } else {
                header.classList.remove("header-fixed");
            }
        }, {
            root:null,
            rootMargin: '0px',
            threshold: 1.0,
          });
        observer.observe(document.querySelector('.react__logo'));
    })

    return (
        <section className="Home" id="home">
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