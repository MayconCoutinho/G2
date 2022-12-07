import { Button, Stack } from "@mui/material";
import { useContext } from 'react'
import { GlobalContext } from "../../global/context/useContext.js"

export const NavBottons = () => {
    const { pageNow, setPageNow } = useContext(GlobalContext)

    const theme = (pageLater) => {
        const buttonNowColor = (pageLater === pageNow ? "#6d6d6d" : "#1a1a1a")

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
            <Button sx={theme("Geral")} onClick={() => { setPageNow("Geral") }}>Geral</Button>
            <Button sx={theme("Esportes")} onClick={() => { setPageNow("Esportes") }}>Esportes</Button>
            <Button sx={theme("Entretenimento")} onClick={() => { setPageNow("Entretenimento") }}>Entretenimento</Button>
            <Button sx={theme("Saúde")} onClick={() => { setPageNow("Saúde") }}>Saúde</Button>
            <Button sx={theme("Economia")} onClick={() => { setPageNow("Economia") }}>Economia</Button>
            <Button sx={theme("Polícia")} onClick={() => { setPageNow("Polícia") }}>Polícia</Button>
            <Button sx={theme("Brasil")} onClick={() => { setPageNow("Brasil") }}>Brasil</Button>
            <Button sx={theme("Ao vivo")} onClick={() => { setPageNow("Ao vivo") }}>Ao vivo</Button>
        </Stack>
    )
}