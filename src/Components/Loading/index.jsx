import { Box, CircularProgress } from "@mui/material"

export const Loading = () => {
  return(
    <>
    <Box
    margin={0}
    position={'absolute'}
    top={'50%'}
    left={'45%'}
    marginRight={'-50%'}
    >
        <CircularProgress size={50} sx={{
            color:"#0e0e0e",

            }}/>

    </Box>
    </>
  )
}
