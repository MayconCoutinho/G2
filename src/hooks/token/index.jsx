import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminUser, goToLogin } from "../../routes/coordinator";
import { getLogin } from "../../services/FireBase";

export const Token = () => {
  const navigate = useNavigate()
  const tokenName = window.localStorage.getItem('tokenName')
  const tokenPassword = window.localStorage.getItem('tokenPassword')


  useEffect(() => {
    if(tokenName === null || tokenName === undefined || tokenPassword === null || tokenPassword === undefined){
      goToLogin(navigate)
    } else {
      const resultNoticias = getLogin()
      resultNoticias.then((response) => {
        response.map((item) =>{
          if(item.login === tokenName && item.senha === tokenPassword ){
            goToAdminUser(navigate)

          } else{
            localStorage.removeItem('token')
          }
        })
      })
    }
  },[token])


}
