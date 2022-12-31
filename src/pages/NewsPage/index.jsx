import { CardMedia, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GlobalContext } from "../../global/context/useContext.js";

export const NewsPage = () => {
  const { id } = useParams()
  const { newsletter } = useContext(GlobalContext)

  const ConvertendoDataHora = (item) => {
    const data1 = item.data.substr(0, 10).split("-").reverse()
    const hora1 = item.data.substr(11, 5).replace(":", "h")
    return data1[0] + "/" + data1[1] + "/" + data1[2] + " " + hora1
  }

  return (
    <>
      <Header />
      {newsletter.length > 0 ?

        newsletter && newsletter.map((item) => {
          if (item.id === id) {
            return <Grid
              display={"grid"}
              container direction={"row"}
              justifyContent={"center"}
              mb={4}
              gridTemplateColumns
              justifyItems={"start"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Typography component="h4" variant="h4" sx={{
                paddingTop: 4,
                paddingBottom: 4,
                paddingRight: 1,
                fontSize: "38px",
                fontWeight: 700,
                fontFamily: "Open Sans",
                letterSpacing: "-0.04em",
                lineHeight: "110%",
                fontVariationSettings: "initial",
                marginLeft: "24px",
                maxWidth: "800px",
              }}>
                {item.topico}
              </Typography>
              <Typography component="h4" variant="h4" sx={{
                paddingTop: 2,
                paddingBottom: 4,
                paddingRight: 1,
                fontWeight: 500,
                fontSize: "16px",
                fontFamily: "Open Sans",
                letterSpacing: "-0.02em",
                fontVariationSettings: "initial",
                marginLeft: "24px",
                maxWidth: "800px",
                color: "#555"
              }}>
                {ConvertendoDataHora(item)}
              </Typography>

              <CardMedia
                component="img"
                sx={{
                  width: "90%",
                  maxWidth: "800px",
                  minWidth: "300px",
                  marginLeft: "24px"
                }}
                image={item.imagem}
              />
              <Typography component="article" sx={{
                paddingTop: 4, paddingBottom: 4, width: "90%",
                color: "#333",
                fontFamily: "glbOpenSans, Open Sans",
                fontSize: "19px",
                letterSpacing: "-0.025em",
                lineHeight: "150%",
                fontVariationSettings: "initial",
                fontFeatureSettings: "initial",
                marginBottom: "24px",
                maxWidth: "800px",
                marginLeft: "24px"

              }}>
                {item.noticia}
              </Typography>
            </Grid>
          }
        })

        :

        <>
          <Grid
            display={"grid"}
            container direction={"row"}
            justifyContent={"center"}
            mb={4}
            gridTemplateColumns
            justifyItems={"start"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box marginTop={5}>
              <Skeleton width={320} />
              <Skeleton width={300} animation="wave" />
              <Skeleton width={250} animation={false} />
            </Box>

            <Box marginTop={5} >
              <Skeleton width={300} height={250} variant="rectangular" />
            </Box>
            <Box marginTop={5}>
              <Skeleton width={320} />
              <Skeleton width={300} animation="wave" />
              <Skeleton width={320} animation={false} />
              <Skeleton width={330} />
              <Skeleton width={300} animation="wave" />
              <Skeleton width={340} />
              <Skeleton width={300} animation="wave" />
              <Skeleton width={250} animation={false} />
            </Box>

          </Grid>
        </>
      }
      <Footer />
    </>
  )
}
