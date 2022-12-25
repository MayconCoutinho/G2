import { Button, Stack } from "@mui/material";
import { useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../global/context/useContext.js";
import { goToHomeNavPage } from "../../routes/coordinator.jsx";

export const NavBottons = () => {
    const { pageNow, setPageNow } = useContext(GlobalContext)
    const navigate = useNavigate()
    const {page} = useParams()
    if(page){
      setPageNow(page)
    } else{
      setPageNow("Geral")
    }

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
            <Button sx={theme("Geral")} onClick={() => { goToHomeNavPage(navigate,"Geral",setPageNow) }}>Geral</Button>
            <Button sx={theme("Esporte")} onClick={() => { goToHomeNavPage(navigate,"Esporte",setPageNow) }}>Esporte</Button>
            <Button sx={theme("Entreterimento")} onClick={() => { goToHomeNavPage(navigate,"Entreterimento",setPageNow) }}>Entretenimento</Button>
            <Button sx={theme("Saude")} onClick={() => { goToHomeNavPage(navigate,"Saude",setPageNow) }}>Saúde</Button>
            <Button sx={theme("Economia")} onClick={() => { goToHomeNavPage(navigate,"Economia",setPageNow) }}>Economia</Button>
            <Button sx={theme("Policia")} onClick={() => { goToHomeNavPage(navigate,"Policia",setPageNow) }}>Polícia</Button>
            <Button sx={theme("Brasil")} onClick={() => { goToHomeNavPage(navigate,"Brasil",setPageNow) }}>Brasil</Button>
            <Button sx={theme("Ao vivo")} onClick={() => { goToHomeNavPage(navigate,"Ao vivo",setPageNow) }}>Ao vivo</Button>
        </Stack>
    )
}
