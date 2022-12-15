import { Typography } from "@mui/material"

export const GeralRender = ({ pageNowAdmin }) => {
  if (pageNowAdmin.toLowerCase() === "geral") {
    return <>
      <Typography
        fontFamily={"monospace"}
        fontSize={24}
        fontWeight={400}
        marginTop={5}
        marginBottom={5}
        textAlign={"center"}
      >
        Geral
      </Typography>
    </>
  }
}
