import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

export const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>

            <h1> 404 </h1>
            <p> Essa pagina não existe.</p>
            <button onClick={() => goToHomePage(navigate)}> Retornar </button>
        </>
    )
}
