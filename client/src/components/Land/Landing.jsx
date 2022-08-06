import React from "react";
import { Link } from "react-router-dom";

export default function Landing(params) {
    return (
    <div>
        <h1>Welcome to my madafucking UNIQUE pokemon page xd</h1>
        <Link to={"/home"}>
        <button>
            ir al home
        </button>
        </Link>
    </div>
    );
}
