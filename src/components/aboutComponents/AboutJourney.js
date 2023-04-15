import React from "react";
import * as ReactFiver from "react-feather";

export const AboutJourney = () => {
    return (
        <div className="about-description-journey">
            <span className="about-desc-start"></span>My journey :
            <div className="about-descj-content">
                <div className="about-descj-content--date">
                    <div className="about-descj--circle"></div>
                    <div className="about-descj--date">2015-2016</div>
                </div>
                <div className="about-descj-content--event">
                    <div className="about-descj--ligne"></div>
                    <div className="about-descj--event">
                        <ReactFiver.MapPin width="14px" height="14px" /> Antananarivo<br />
                        <ReactFiver.Home width="14px" height="14px" /> Printemps<br />
                        <ReactFiver.Calendar width="14px" height="14px" /> BEPC
                    </div>
                </div>
                <div className="about-descj-content--date">
                    <div className="about-descj--circle"></div>
                    <div className="about-descj--date">2018-2019</div>
                </div>
                <div className="about-descj-content--event">
                    <div className="about-descj--ligne"></div>
                    <div className="about-descj--event">
                        <ReactFiver.MapPin width="14px" height="14px" /> Antananarivo<br />
                        <ReactFiver.Home width="14px" height="14px" /> Lycée Moderne Ampefiloha<br />
                        <ReactFiver.Calendar width="14px" height="14px" /> BACC (Série C)
                    </div>
                </div>
                <div className="about-descj-content--date">
                    <div className="about-descj--circle"></div>
                    <div className="about-descj--date">2020-2021</div>
                </div>
                <div className="about-descj-content--event">
                    <div className="about-descj--ligne"></div>
                    <div className="about-descj--event">
                        <ReactFiver.MapPin width="14px" height="14px" /> Fianarantsoa<br />
                        <ReactFiver.Home width="14px" height="14px" /> EMIT<br />
                        <ReactFiver.Calendar width="14px" height="14px" /> Encore etudiant ...
                    </div>
                </div>
            </div>
        </div>
    )
}