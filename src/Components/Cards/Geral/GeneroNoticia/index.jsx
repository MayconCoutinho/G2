import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { goToNewsPage } from '../../../../routes/coordinator.jsx';
import { Publicidade } from '../../../Publicidade/index.jsx';
import { ButtonVejaMais } from '../../ButtonVejaMais/index.jsx';

export const GeneroNoticia = ({ newsletter, pageNow }) => {
  const navigate = useNavigate();
  const newsletterFilter = newsletter.filter((item) => { return item.genero === pageNow })
  const [vejaMais, setVejaMais] = useState(3)
  const GeneroNoticiaNewsletter = JSON.parse(JSON.stringify(newsletterFilter));
  GeneroNoticiaNewsletter.length = vejaMais
  useEffect(() => {
    setVejaMais(3)
  },[pageNow])

  return <>{

    GeneroNoticiaNewsletter.map((item, index) => {
      return <>
        <Grid
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
        {index % 3 === 0 ?   <Typography
                    component="div"
                    variant="body2"
                    fontWeight={700}
                    lineHeight={"20px"}
                    letterSpacing={"-1px"}
                    fontSize={"1rem"}
                    color={"#ff5100"}
                    fontFamily={"opensans, opensans-bastian, Arial, sans-serif"}
                    backgroundColor={"#000"}
                  >
                    {Publicidade()}
                  </Typography> : <>

                  </>}
        { index + 1 === vejaMais ? <ButtonVejaMais setVejaMais={setVejaMais} vejaMais={vejaMais} /> : <></>}
      </>
    })
  }
  </>
}
