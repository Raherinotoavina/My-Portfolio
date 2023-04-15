import React, {useEffect} from "react";
import { AboutMe } from "./aboutComponents/AboutMe";
import { AboutJourney } from "./aboutComponents/AboutJourney";
import { AboutSkills } from "./aboutComponents/AboutSkills";

export const About = () => {

    const navigationActive = (e) => {
        const activeNav = document.querySelector(".active-nav");
        e.target.classList.add("active-nav");
        activeNav.classList.remove("active-nav");
    }

    const showContent = (component) => {
        document.querySelector('.show-content').classList.remove("show-content");
        document.querySelector(`.${component}`).classList.add("show-content");
    }

    return (
        <section className="About" id="about">
            <div className="sous-title">about</div>
            <div className="about__content">
                <div className="about__content--left">
                    <img src={require("../assets/images/Me/leo.jpg")} className="about-profil" width={"50%"} alt="" />
                    <div className="about-skills">
                        <p className="about-skills__title">Some of my skills :</p>
                        <ol className="about-skills__list">
                            <li>JavaScript</li>
                            <li>TailWind</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Php</li>
                        </ol>
                    </div>
                </div>
                <div className="about__content--rigth">
                    <div className="about-navigation" onClick={navigationActive}>
                        <p
                            className="about-navigation-me active-nav"
                            onClick={() => showContent("about__description-me")}
                        >About Me</p>
                        <p
                            className="about-navigation-journey"
                            onClick={() => showContent("about-description-journey")}
                        >My journey</p>
                        <p
                            className="about-navigation-skills"
                            onClick={() => showContent("about-description-skills")}
                        >My skills</p>
                    </div>
                    <section className="about__description">
                        <AboutMe />
                        <AboutJourney />
                        <AboutSkills />
                    </section>
                </div>
            </div>
        </section>
    )
}