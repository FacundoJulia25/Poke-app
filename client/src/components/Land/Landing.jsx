import React from "react";
import { Link } from "react-router-dom";

export default function Landing(params) {
    return (
        <div>
            <h1>Welcome to my pokepage :D</h1>
            <Link to={"/home"}>
                <button>
                    HOME
                </button>
            </Link>
        </div>
    );
}
