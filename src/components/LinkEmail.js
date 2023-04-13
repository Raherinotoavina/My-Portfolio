import React from "react";
import * as ReactFiver from "react-feather";

export const LinkEmail = () => {
    return (
        // <a href="#about">
        //     <div className="linkemail">raherinotoavinasa@gmail.com</div>
        // </a>
        <div className="linkemail">
            <p>
                <a href=""><ReactFiver.GitHub className="icon"/></a>
            </p>
            <p>
                <a href=""><ReactFiver.Linkedin className="icon"/></a>
            </p>
            <p>
                <a href=""><ReactFiver.Twitter className="icon"/></a>
            </p>
            <p>
                <a href=""><ReactFiver.Facebook className="icon"/></a>
            </p>
            <p>
                <a href=""><ReactFiver.Code className="icon"/></a>
            </p> 
        </div>
    )
}