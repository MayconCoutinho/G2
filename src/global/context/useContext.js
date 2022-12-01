import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [pageNow, setPageNow] = useState("Geral")
    return (
        <GlobalContext.Provider value={{pageNow, setPageNow}}>{children}</GlobalContext.Provider>
    )
} 