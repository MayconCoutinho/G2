import { Typography } from "@mui/material"
import { CardsRender } from "./Cards"

export const EditarRender = ({ pageNowAdmin, newsletter }) => {
  if (pageNowAdmin.toLowerCase() === "editar") {
    return <>
          <Typography
        fontFamily={"monospace"}
        fontSize={24}
        fontWeight={400}
        marginTop={5}
        marginBottom={5}
        textAlign={"center"}
      >
        Ao vivo
      </Typography>

      <Typography
        fontFamily={"monospace"}
        fontSize={24}
        fontWeight={400}
        marginTop={5}
        marginBottom={5}
        textAlign={"center"}
      >
        Editar
      </Typography>
      <CardsRender newsletter={newsletter} pageNow={"geral"} />
    </>
  }
}
