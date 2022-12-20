import { Button } from "@mui/material"

export const ButtonSair = () => {

  const Sair = () => {
    localStorage.removeItem('token')
  }
  return <>
    <Button
      variant="contained"
      onClick={() => { Sair() }}> Sair </Button>
  </>
}
