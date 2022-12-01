import { Box, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useContext } from 'react'
import { GlobalContext } from "../../global/context/useContext.js"

export const NewCard = () => {
    const { pageNow } = useContext(GlobalContext)


    const newsletter = require("../../json/noticias.json");

    return (
        <>
            {newsletter.map((item) => {
                if (pageNow.toLowerCase() === "ao vivo") {
                    if(item.genero === pageNow.toLowerCase()){
                    return <Stack sx={{display:"grid", }}>
                        <iframe width="949" height="534" src="https://www.youtube.com/embed/jfKfPfyJRdk?controls=0&autoplay=1" title="lofi hip hop radio - beats to relax/study to" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="480" height="560" src="https://www.youtube.com/live_chat?v=jfKfPfyJRdk&embed_domain=irn.surge.sh" title="lofi hip hop radio - beats to relax/study to" allowfullscreen></iframe>
                    </Stack>
                    }
                }
                if (pageNow.toLowerCase() === "geral") {
                    return <>
                        <Divider variant="middle" />
                        <Card sx={{
                            borderTop: 0,
                            padding: "1.5rem 0px",
                            position: "relative",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            maxWidth: 600,
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="body2">
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
                        </Card>
                    </>
                } else {
                    if (item.genero === pageNow.toLowerCase()) {
                        return <>
                            <Divider variant="middle" />
                            <Card sx={{
                                borderTop: 0,
                                padding: "1.5rem 0px",
                                position: "relative",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                maxWidth: 600,
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="body2">
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
                            </Card>
                        </>
                    }
                }
            })}
        </>
    )
}