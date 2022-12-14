import { Grid } from '@mui/material';

export const AoVivoRender = ({ aoVivo, pageNow }) => {
  return aoVivo.map((item) => {
    if (pageNow.toLowerCase() === "ao vivo") {
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
  })
}
