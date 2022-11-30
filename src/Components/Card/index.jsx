import { Box, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';

export const NewCard = () => {
    return (
        <> 
        <Divider variant="middle" />
        <Card sx={{ 
                borderTop: 0,
                padding: "1.5rem 0px",
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                maxWidth:600,
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Fortes Chuvas Itapemirim
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ 
                        width: 151,                    
                    }}
                    image="https://blog.nec.com.br/hubfs/%5B01%2018%5D%20A%20tempestade%20perfeita.png"
                />
            </Card>
            </>
    )
}