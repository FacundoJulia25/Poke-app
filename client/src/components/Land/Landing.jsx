import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function Landing(params) {
    return (
        <div className="Landing">
            <div className="divWelcome">
                <h1 className="welcome">¡Welcome to my WebSite!</h1>
                <div>
                    <Link style={{ display:'inline-block', textDecoration:'none'}} to={"/home"}>
                        <h2 className="goHome">
                            Go Home
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}
