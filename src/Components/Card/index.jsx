import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useContext } from 'react'
import { GlobalContext } from "../../global/context/useContext.js"
import { useNavigate } from "react-router-dom";
import { goToNewsPage } from '../../routes/coordinator.jsx';

export const NewCard = () => {
    const { pageNow } = useContext(GlobalContext)
    const navigate = useNavigate();
    const newsletter = require("../../json/noticias.json");

    const VejaMais = () => {
        if(pageNow.toLowerCase() !== "ao vivo"){
            return <Grid
            justifyContent={"center"}
            container
        >
            <Button
                sx={{

                    color: "#fff",
                    overflowAnchor: "none",
                    fontFamily: "opensans, opensans-bastian, Arial, sans-serif",
                    fontSize: "14px",
                    letterSpacing: "-0,015em",
                    lineHeight: "150%",
                    fontWeight: 700,
                    fontVariationSettings: "initial",
                    fontFeatureSettings: "initial",
                    width: "350px",
                    height: "40px",
                    marginBottom: "10px",
                    background: "#1b1b1b",
                    '&:hover': {
                        background: '#6b6b6b',
                    },
                    borderRadius: 1,
                }}
            >
                VEJA MAIS
            </Button>
        </Grid>
        }
    }

    return (
        <>
            {

                newsletter.map((item) => {
                    if (pageNow.toLowerCase() === "ao vivo") {
                        if (item.genero === pageNow.toLowerCase()) {
                            return <Grid container direction={"column"} sx={{
                                backgroundColor: "#2c2c2c",
                                gap: "15px",
                                alignItems: "flex-start",
                                padding: "5px 5%",
                                paddingBottom: "120px",
                            }}>
                                <iframe id="myVideo" width="100%" height="534" src={item.video} title="lofi hip hop radio - beats to relax/study to" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
                                <iframe width="100%" height="560" src={item.videoChat} title="lofi hip hop radio - beats to relax/study to" allowfullscreen></iframe>
                            </Grid>
                        }
                    }
                    if (pageNow.toLowerCase() === "geral") {
                        return <Grid
                            container
                            direction={"row"}
                            justifyContent={"center"}
                            mb={4}
                            onClick={() => goToNewsPage(navigate, item.id)}
                            sx={{
                                padding: "0px 1rem",
                                transition: "height 2s ease 0s"
                            }}
                        >
                            <Box sx={{
                                borderTop: "1px solid rgb(219, 219, 219)",
                                padding: "1rem 0px",
                                position: "relative",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                maxWidth: 600,
                                cursor: "pointer",
                                '&:hover': {
                                    backgroundColor: '#b4b4b44b',
                                },
                            }}
                            >
                                <Box sx={{
                                    display: 'flex', flexDirection: 'column',

                                }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h2"
                                            sx={{
                                                fontWeight: 700,
                                                lineHeight: "20px",
                                                letterSpacing: "-1px",
                                                fontSize: "1rem",
                                                color: "#333",
                                                fontFamily: "opensans, opensans-bastian, Arial, sans-serif",
                                            }}>
                                            {item.topico}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        float: "right",
                                        margin: "0px 0px 0px 1rem",
                                    }}
                                    image={item.imagem}
                                />
                            </Box>
                        </Grid>
                    } else {
                        if (item.genero === pageNow.toLowerCase()) {
                            return <Grid
                                container
                                direction={"row"}
                                justifyContent={"center"}
                                mb={4}
                                sx={{
                                    padding: "0px 1rem",
                                    transition: "height 2s ease 0s"
                                }}
                                onClick={() => goToNewsPage(navigate, item.id)}
                            >
                                <Box sx={{
                                    borderTop: "1px solid rgb(219, 219, 219)",
                                    padding: "1rem 0px",
                                    position: "relative",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    maxWidth: 600,
                                    cursor: "pointer",
                                    '&:hover': {
                                        backgroundColor: '#b4b4b44b',
                                    }
                                }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography 
                                            component="div" 
                                            variant="body2"
                                            fontWeight={700}
                                            lineHeight={"20px"}
                                            letterSpacing={"-1px"}
                                            fontSize={"1rem"}
                                            color={"#333"}
                                            fontFamily={ "opensans, opensans-bastian, Arial, sans-serif"}
                                            >
                                                {item.topico}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: 151,
                                        }}
                                        image={item.imagem}
                                    />
                                </Box>
                            </Grid>
                        }
                    }
                })}
                {
                    VejaMais()
                }
        </>
    )
}