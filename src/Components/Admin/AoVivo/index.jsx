import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "../../../hooks/useForm";
import { EditarAovivo } from "../../../services/FireBase";

export const AoVivo = ({ pageNowAdmin }) => {
  const { formValues, onChange, cleanFields } = useForm({
    video: "",
    videoChat: ""
  })
  const SubmitForm = async () => {
    await EditarAovivo(formValues)
    alert("Formulario Enviado")
    cleanFields()
  }
  if (pageNowAdmin.toLowerCase() === "aovivo") {
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
            <TextField
              required
              id="outlined-required"
              label="video"
              name="video"
              value={formValues.video}
              onChange={onChange}
              defaultValue={"https://www.youtube.com/embed/#URL-AQUI#?controls=0&autoplay=1&modestbranding=1"}
            />
            <TextField
              required
              id="outlined-required"
              label="videoChat"
              name="videoChat"
              value={formValues.videoChat}
              onChange={onChange}
              defaultValue={"https://www.youtube.com/live_chat?v=#URL-AQUI#&embed_domain=#DOMINO#DO#SITE"}
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
            > Editar Ao vivo </Button>
          </Box>
        </Grid>
      </form>

    </>
  }
}
