import { Button, Grid } from '@mui/material';

export const ButtonVejaMais = ({ setVejaMais, vejaMais }) => {
  return <Grid
    justifyContent={"center"}
    container
  >
    <Button
      onClick={() => { setVejaMais(vejaMais + 3) }}
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
        marginBottom: "50px",
        marginTop: "50px",
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
