import { Autocomplete, Box, Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { EditarNoticias } from "../../../services/FireBase";
import { CardRender } from "./Card";

export const EditarRender = ({ pageNowAdmin, newsletter }) => {
  const [editar, setEditar] = useState(null)

  const { formValues, onChange, cleanFields } = useForm({
    genero: "",
    topico: "",
    id: "",
    imagem: "",
    noticia: "",
  })


  const SubmitForm = async () => {
    console.log(formValues)
    await EditarNoticias(formValues, newsletter.filter((item) => { return item.topico === editar}).map((item) => { return item.id}))
    alert("Formulario Enviado")
    cleanFields()
  }
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
      <form onSubmit={SubmitForm}>
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
            <InputLabel id="demo-simple-select-label" > Escolha a noticia </InputLabel>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={newsletter.map((item) => { return item.topico })}
              renderInput={(params) => <TextField {...params} label="Pesquisa" />}
              value={editar}
              onChange={(event, newValue) => {
                setEditar(newValue)
              }}
            />
            {editar === null || editar === undefined ?
            <></>
            :
              <>
              <CardRender newsletter={newsletter.filter((item) => { return item.topico === editar})}/>
                <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="genero"
                  value={formValues.genero}
                  defaultValue={newsletter.filter((item) => { return item.topico === editar}).map((item) => { return item.genero})}
                  label="Genero"
                  onChange={onChange}
                >
                  <MenuItem value={"Geral"}>Geral</MenuItem>
                  <MenuItem value={"Esporte"}>Esporte</MenuItem>
                  <MenuItem value={"Entreterimento"}>Entreterimento</MenuItem>
                  <MenuItem value={"Saude"}>Saúde</MenuItem>
                  <MenuItem value={"Economia"}>Economia</MenuItem>
                  <MenuItem value={"Policia"}>Polícia</MenuItem>
                  <MenuItem value={"Brasil"}>Brasil</MenuItem>
                </Select>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={newsletter.filter((item) => { return item.topico === editar}).map((item) => { return item.topico})}
                  label="topico"
                  name="topico"
                  value={formValues.topico}
                  onChange={onChange}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="URL imagem"
                  name="imagem"
                  value={formValues.imagem}
                  onChange={onChange}
                  title="URL imagem"
                  defaultValue={newsletter.filter((item) => { return item.topico === editar}).map((item) => { return item.imagem})}
                />
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={newsletter.filter((item) => { return item.topico === editar}).map((item) => { return item.noticia})}
                  multiline
                  rows={8}
                  label="noticia"
                  name="noticia"
                  value={formValues.noticia}
                  onChange={onChange}
                />
                <Button
                  sx={{
                    paddingLeft: 10.3,
                    paddingRight: 10.3,
                    background: "#000",
                    '&:hover': {
                      backgroundColor: '#222'
                    },
                  }}
                  size="small"
                  variant="contained"
                  onClick={() => { SubmitForm() }}
                > Editar notícias </Button>
              </>
            }
          </Box>
        </Grid>
      </form>
    </>
  }
}
