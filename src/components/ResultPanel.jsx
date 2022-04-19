import React from "react";

const ResultPanel = (props) => {
    return(
        <>
        <h1>Liczba kliknięć: {props.count} </h1>
        <h1>Wynik: {props.result}</h1>
        </>
    )
}

export default ResultPanel;