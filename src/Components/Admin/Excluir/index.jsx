import { Autocomplete, Box, Grid, InputLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { CardRender } from "./Cards"

export const ExcluirRender = ({ pageNowAdmin, newsletter }) => {
  const [pesquisa, setPesquisa] = useState(null)

  if (pageNowAdmin.toLowerCase() === "excluir") {
    return <>
            <Grid
          container
          justifyContent={"center"}
          mb={4}
        >
          <Box
            marginTop={5}
            display={"grid"}
            width={600}
            padding={2.5}
            gap={3}
          >
                  <Typography
        fontFamily={"monospace"}
        fontSize={24}
        fontWeight={400}
        marginBottom={5}
        textAlign={"center"}
      >
        Excluir
      </Typography>
      <InputLabel id="demo-simple-select-label" > Escolha a noticia </InputLabel>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={newsletter.map((item) => { return item.topico })}
        renderInput={(params) => <TextField {...params} label="Pesquisa" />}
        value={pesquisa}
        onChange={(event, newValue) => {
          setPesquisa(newValue)
        }}
      />
      {
        pesquisa === null || pesquisa === undefined ?
          <></>
          :
          <CardRender newsletter={newsletter.filter((item) => { return item.topico === pesquisa})} />
      }
      </Box>
      </Grid>
    </>
  }
}
