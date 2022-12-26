import { Box, CardContent, CardMedia, Typography } from '@mui/material';

export const CardRender = ({ newsletter }) => {
  return (
    <>
    <Box sx={{
      borderTop: "1px solid rgb(219, 219, 219)",
      padding: "1rem 0px",
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignnewsletters: "flex-start",
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
            {newsletter[0].topico}
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
        image={newsletter[0].imagem}
      />
    </Box>
</>
  )
  }
