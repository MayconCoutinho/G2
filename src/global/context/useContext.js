import { createContext, useEffect, useState } from "react";
import { getAoVivo, getNoticias } from "../../services/FireBase";

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [pageNow, setPageNow] = useState('Geral')
  const [pageNowAdmin, setPageNowAdmin] = useState("Adicionar")
  const [newsletter, setNewsletter] = useState([])
  const [aoVivo, setAoVivo] = useState([])
  const [pageUpdate, setPageUpdate] = useState(1)
  const [progresseLogin, setProgresseLogin] = useState(false)

  const filtrandoDadosData = (dataCompleta) => {
    const limpandoData = dataCompleta.data.substr(0, 10).split('-')
    const resultData = limpandoData[0] + limpandoData[1] + limpandoData[2]
    const limpandoHora = dataCompleta.data.substr(11, 8).split(":")
    const resultHota = limpandoHora[0] + limpandoHora[1] + limpandoHora[2]
    const DataHora = resultData + resultHota
    return DataHora
  }
  const OrdenarData = (data1, data2) => {
    return filtrandoDadosData(data2) - filtrandoDadosData(data1)
  }
  useEffect(() => {
    const resultNoticias = getNoticias()
    resultNoticias.then((response) => {
      const result = response.sort(OrdenarData)
      setNewsletter(result)
    })
    const resultAoVivo = getAoVivo()
    resultAoVivo.then((response) => { setAoVivo(response) })
  }, [pageUpdate])

  return (
    <GlobalContext.Provider value={{ pageNow, setPageNow, pageNowAdmin, setPageNowAdmin, newsletter, aoVivo, setPageUpdate, pageUpdate, progresseLogin, setProgresseLogin }}>{children}</GlobalContext.Provider>
  )
}
