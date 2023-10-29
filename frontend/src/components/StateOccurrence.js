import React from "react";

function StateOccurence({ state, paper, steel, glass, cooperatives }) {
    return (
        <div className="stateOccurrence">
            <h1> {state} </h1>
            <p> Papel: ${paper} </p>
            <p> Metal: ${steel} </p>
            <p> Papel: ${glass} </p>
            <p> Cooperativas: ${cooperatives} </p>
        </div>
    );
}

export default StateOccurence;
