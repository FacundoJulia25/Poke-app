import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function Landing(params) {
    return (
        <div className="Landing">
            <div>
                <h1 className="">Welcome to my WebSite</h1>
                <Link to={"/home"}>
                    <button>
                        HOME
                    </button>
                </Link>
            </div>
        </div>
    );
}
