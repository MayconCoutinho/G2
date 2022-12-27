import { Box, Stack } from '@mui/material';
import React from 'react';
import { ButtonSair } from '../Admin/ButtonSair';

export const HeaderAdmin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        width: "100%",
        backgroundColor: "#1a1a1a",
        zIndex: "99",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        position: "relative",
        boxShadow: "3px 3px 3px 2px rgba(0, 0, 0, 0.2)",
        justifyContent: "space-evenly"

      }}
    >
      <Stack
        sx={{
          textAlign: "center",
          color: "#fff",
          fontFamily: "serif",
          fontSize: "30px",
          fontWeight: "550",
          letterSpacing: "2px",
        }}
      >
        RC News
      </Stack>
      <ButtonSair />

    </Box>

  )
}
