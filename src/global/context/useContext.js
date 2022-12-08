import { createContext } from "react";
import { useState, useEffect } from "react";
import { getNoticias } from "../../services/FireBase";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [pageNow, setPageNow] = useState("Geral")
    const [pageNowAdmin, setPageNowAdmin] = useState("Geral")
    const [newsletter, setNewsletter] = useState([])

    useEffect(() => {
        const result = getNoticias()
        result.then((response) => {setNewsletter(response)})
    },[])

    return (
        <GlobalContext.Provider value={{pageNow, setPageNow, pageNowAdmin, setPageNowAdmin, newsletter}}>{children}</GlobalContext.Provider>
    )
}
