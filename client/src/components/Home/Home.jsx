import React from "react";

export default function Home(params) {
    const { img } = params;
    return (
    <>
        <h1>Este es el home kpo</h1>
        <img src={img} alt="imagen_prueba" />
    </>
    );
}
