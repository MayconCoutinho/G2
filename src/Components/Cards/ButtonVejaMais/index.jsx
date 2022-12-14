import { Button, Grid } from '@mui/material';

export const ButtonVejaMais = ({ pageNow }) => {
  if (pageNow.toLowerCase() !== "ao vivo") {
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
