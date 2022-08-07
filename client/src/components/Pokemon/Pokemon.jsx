import React from "react";

function Pokemon(props) {
    const { img, name, types } = props;
    return (
    <>
        <img src={img} alt={name} />
        <h1>Nombre {name}</h1>
        <h2>Tipos: { types.toString() }</h2>
    </>
    );
}

export default Pokemon;
