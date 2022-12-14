import { CardMedia, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GlobalContext } from "../../global/context/useContext.js";

export const NewsPage = () => {
    const { id } = useParams()
    const { newsletter } = useContext(GlobalContext)


    return (
        <>
            <Header />
            {newsletter.map((item) => {
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
            })}
            <Footer />
        </>
    )
}
