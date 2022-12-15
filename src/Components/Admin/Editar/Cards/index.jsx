import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export const CardsRender = ({ newsletter, pageNow }) => {

  return (newsletter.map((item) => {
    if (pageNow.toLowerCase() === "geral") {
      return <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        padding={"0px 1rem"}
        transition={"height 2s ease 0s"}
        mb={4}
        onClick={() => {
        }}
      >
        <Box sx={{
          borderTop: "1px solid rgb(219, 219, 219)",
          padding: "1rem 0px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: 600,
          cursor: "pointer",
          '&:hover': {
            backgroundColor: '#30303047',
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
    }
  }))
}
