import { createContext, useEffect, useState } from "react";
import { getAoVivo, getNoticias } from "../../services/FireBase";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [pageNow, setPageNow] = useState("Geral")
    const [pageNowAdmin, setPageNowAdmin] = useState("Geral")
    const [newsletter, setNewsletter] = useState([])
    const [aoVivo, setAoVivo] = useState([])

    useEffect(() => {
        const resultNoticias = getNoticias()
        resultNoticias.then((response) => {setNewsletter(response)})

        const resultAoVivo = getAoVivo()
        resultAoVivo.then((response) => {setAoVivo(response)})
    },[])

    return (
        <GlobalContext.Provider value={{pageNow, setPageNow, pageNowAdmin, setPageNowAdmin, newsletter,aoVivo}}>{children}</GlobalContext.Provider>
    )
}
