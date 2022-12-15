import { Box, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { goToNewsPage } from '../../../routes/coordinator.jsx';

export const CardsGeralRender = ({ newsletter, pageNow }) => {
  const navigate = useNavigate();
  const SkeletonTotal = [1,2,3,4]

  return (newsletter.length > 0 ?
    newsletter.map((item) => {
      if (pageNow.toLowerCase() === "geral") {
        return <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          padding={"0px 1rem"}
          transition={"height 2s ease 0s"}
          mb={4}
          onClick={() => goToNewsPage(navigate, item.id)}
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
        if (item.genero.toLowerCase() === pageNow.toLowerCase()) {
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
              width: 600,
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
                    fontFamily={"opensans, opensans-bastian, Arial, sans-serif"}
                  >
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
      }

    })
    :        <>
    {SkeletonTotal.map(() => {
       return <Grid
       container
       direction={"row"}
       justifyContent={"center"}
       padding={"0px 1rem"}
       transition={"height 2s ease 0s"}
       mb={4}
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
       }}
       >
         <Box sx={{
           display: 'flex', flexDirection: 'column', width:220, marginTop:2
         }}>
             <Skeleton />
             <Skeleton animation="wave" />
             <Skeleton animation={false} />
             <Skeleton animation={false} />
         </Box>
         <Skeleton variant="rectangular" width={100} height={100} />
       </Box>
     </Grid>
    })}
  </>
    )
}
