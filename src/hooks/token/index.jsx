import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/context/useContext.js";
import { goToAdminUser, goToLogin } from "../../routes/coordinator";
import { getLogin } from "../../services/FireBase";

export const Token = () => {
  const { setProgresseLogin } = useContext(GlobalContext)

  const navigate = useNavigate()
  const tokenName = window.localStorage.getItem('tokenName')
  const tokenPassword = window.localStorage.getItem('tokenPassword')

  const ConfirmeToken = () => {
    const resultNoticias =  getLogin()
    resultNoticias.then((response) => {
      response.map((item) =>{
        if(item.login === tokenName && item.senha === tokenPassword ){
          goToAdminUser(navigate)
          setProgresseLogin(false)
        }
        if(item.login !== tokenName && item.senha !== tokenPassword){
          localStorage.removeItem('tokenPassword')
          localStorage.removeItem('tokenName')
          alert('Esse user não existe, tente novamente')
          setProgresseLogin(false)
        }
      })
    })
  }

  useEffect(() => {
    if(tokenName === null || tokenName === undefined || tokenPassword === null || tokenPassword === undefined){
      goToLogin(navigate)
    } else {
      ConfirmeToken()
    }
  },[tokenName,tokenPassword])


}
