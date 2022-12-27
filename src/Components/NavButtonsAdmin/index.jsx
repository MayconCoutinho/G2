import { Button, Stack } from "@mui/material";
import { useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../global/context/useContext.js";
import { goToAdminUser } from "../../routes/coordinator.jsx";

export const NavButtonsAdmin = () => {
  const { pageNowAdmin, setPageNowAdmin } = useContext(GlobalContext)
  const navigate = useNavigate()
  const { page } = useParams()
  if (page) {
    setPageNowAdmin(page)
  } else {
    setPageNowAdmin("Adicionar")
  }
  const theme = (pageLater) => {
    const buttonNowColor = (pageLater === pageNowAdmin ? "#6d6d6d" : "#1a1a1a")

    return {
      background: buttonNowColor,
      '&:hover': {
        backgroundColor: '#b4b4b44b',
      },
      fontSize: "14px",
      color: "#fff",
      borderRadius: 0,
    }
  }
  return (
    <Stack
      variant="contained"
      aria-label="outlined primary button group"
      sx={{
        background: "#1a1a1a",
        paddingLeft: 5,
        marginTop: 3,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 150px)",
        borderRadius: 0,
      }}
    >
      <Button sx={theme("Adicionar")} onClick={() => { goToAdminUser(navigate, "Adicionar", setPageNowAdmin) }}>Adicionar</Button>
      <Button sx={theme("Excluir")} onClick={() => { goToAdminUser(navigate, "Excluir", setPageNowAdmin) }}>Excluir</Button>
      <Button sx={theme("Editar")} onClick={() => { goToAdminUser(navigate, "Editar", setPageNowAdmin) }}>Editar</Button>
      <Button sx={theme("Aovivo")} onClick={() => { goToAdminUser(navigate, "Aovivo", setPageNowAdmin) }}>Ao vivo</Button>
    </Stack>
  )
}
