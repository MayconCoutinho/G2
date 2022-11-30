import { Button, Stack } from "@mui/material";


export const NavBottons = () => {
    const theme = {
        background: "#1a1a1a",
        '&:hover': {
            backgroundColor: '#b4b4b44b',
        },
        fontSize: "14px",
        color: "#fff",
    }
    return (

        <Stack
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
                background: "#1a1a1a",
                paddingLeft: 5,
                marginTop: 3,
                marginBottom: 3,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, 150px)",
                borderRadius: 0,
            }}
        >
            <Button sx={theme}>Geral</Button>
            <Button sx={theme}>Esportes</Button>
            <Button sx={theme}>Entretenimento</Button>
            <Button sx={theme}>Saúde</Button>
            <Button sx={theme}>Economia</Button>
            <Button sx={theme}>Polícia</Button>
            <Button sx={theme}>Brasil</Button>
            <Button sx={theme}>Ao vivo</Button>
        </Stack>
    )
}