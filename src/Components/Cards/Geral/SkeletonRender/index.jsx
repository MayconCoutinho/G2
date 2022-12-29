import { Box, Grid, Skeleton } from '@mui/material';

export const SkeletonRender = () => {
  const SkeletonTotal = [1, 2, 3, 4]
  return SkeletonTotal.map(() => {
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
          display: 'flex', flexDirection: 'column', width: 220, marginTop: 2
        }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton animation={false} />
        </Box>
        <Skeleton variant="rectangular" width={100} height={100} />
      </Box>
    </Grid>
  })
}
