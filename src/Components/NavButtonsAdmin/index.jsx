import { Button, Stack } from "@mui/material";
import { useContext } from 'react'
import { GlobalContext } from "../../global/context/useContext.js"

export const NavButtonsAdmin = () => {
    const { pageNowAdmin, setPageNowAdmin } = useContext(GlobalContext)

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
            <Button sx={theme("Geral")} onClick={() => { setPageNowAdmin("Geral") }}>Geral</Button>
            <Button sx={theme("Adicionar")} onClick={() => { setPageNowAdmin("Adicionar") }}>Adicionar</Button>
            <Button sx={theme("Excluir")} onClick={() => { setPageNowAdmin("Excluir") }}>Excluir</Button>
            <Button sx={theme("Editar")} onClick={() => { setPageNowAdmin("Editar") }}>Editar</Button>
        </Stack>
    )
}
