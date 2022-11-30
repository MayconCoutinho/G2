import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";


export const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1> Login </h1>
            <button onClick={() => goToHomePage(navigate)}> goToHomePage </button>
        </>
    )
}