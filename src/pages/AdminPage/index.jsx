import { Header } from "../../components/Header";
import { NavButtonsAdmin } from "../../components/NavButtonsAdmin";
import { useContext } from 'react'
import { GlobalContext } from "../../global/context/useContext.js"
import { Button, Grid, TextField } from "@mui/material";
import { postNoticias } from "../../services/FireBase";
import { useState } from "react";

export const AdminPage = () => {
  const { newsletter, pageNowAdmin } = useContext(GlobalContext)


  const [values, setValues] = useState({
    amount: '',
    name: '',
    password: '',
    weight: '',
    weightRange: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const PageNow = () => {
    if (pageNowAdmin.toLowerCase() === "geral") {
      return <> geral </>
    }
    if (pageNowAdmin.toLowerCase() === "adicionar") {
      return <>
        <Grid
          container
          direction={"column"}
          justifyContent={"center"}
          marginTop={10}
          transition={"height 2s ease 0s"}
          width={400}
          mb={4}


        >

          <TextField
            required
            id="outlined-required"
            label="genero"
          />
          <TextField
            required
            id="outlined-required"
            label="id"
          />
          <TextField
            required
            id="outlined-required"
            label="imagem"
          />
          <TextField
            required
            id="outlined-required"
            label="noticia"
          />
          <TextField
            required
            id="outlined-required"
            label="topico"
          />


        </Grid>
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
          onClick={() => postNoticias()}
        > Posta noticia </Button>
      </>
    }
    if (pageNowAdmin.toLowerCase() === "excluir") {
      return <h1> excluir </h1>
    }
    if (pageNowAdmin.toLowerCase() === "editar") {
      return <h1> editar </h1>
    }
  }

  return (
    <>
      <Header />
      <NavButtonsAdmin />
      {
        PageNow()

      }
    </>
  )
}

