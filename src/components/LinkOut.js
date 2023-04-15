import React from "react";
import * as ReactFiver from "react-feather";

export const LinkOut = () => {

    return (
        <div className="linkout">
            <p>
                <a href="https://github.com/raherinotoavina"><ReactFiver.GitHub className="icon"/></a>
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
                <a href="https://www.codewars.com/users/ramasama"><ReactFiver.Code className="icon"/></a>
            </p> 
            <p className="ligne"></p>
        </div>
    )
}