import { Typography } from "@mui/material"
import { CardsRender } from "./Cards"

export const ExcluirRender = ({ pageNowAdmin, newsletter }) => {
  if (pageNowAdmin.toLowerCase() === "excluir") {
    return <>
      <Typography
        fontFamily={"monospace"}
        fontSize={24}
        fontWeight={400}
        marginTop={5}
        marginBottom={5}
        textAlign={"center"}
      >
        Excluir
      </Typography>    <CardsRender newsletter={newsletter} pageNow={"geral"} />
    </>
  }
}
