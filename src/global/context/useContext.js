import { createContext, useEffect, useState } from "react";
import { getAoVivo, getNoticias } from "../../services/FireBase";

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [pageNow, setPageNow] = useState('Geral')
  const [pageNowAdmin, setPageNowAdmin] = useState("Adicionar")
  const [newsletter, setNewsletter] = useState([])
  const [aoVivo, setAoVivo] = useState([])
  const [pageUpdate, setPageUpdate] = useState(1)

  useEffect(() => {
    const resultNoticias = getNoticias()
    resultNoticias.then((response) => {
      setNewsletter(response.reverse())
    })

    const resultAoVivo = getAoVivo()
    resultAoVivo.then((response) => { setAoVivo(response) })
  }, [pageUpdate])


  return (
    <GlobalContext.Provider value={{ pageNow, setPageNow, pageNowAdmin, setPageNowAdmin, newsletter, aoVivo, setPageUpdate, pageUpdate}}>{children}</GlobalContext.Provider>
  )
}
