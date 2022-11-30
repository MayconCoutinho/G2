import { Stack,Box } from '@mui/material';
import React from 'react';

export const Header = () => {
    return (
        <Box
        sx={{
            overflow: "hidden",
            width: "100%",
            backgroundColor: "#1a1a1a",
            zIndex: "99",
            height: "50px",
            lineHeight: "50px",
            textAlign: "center",
            position: "relative",
        }}
        >
            <Stack
            sx={{
                textAlign: "center",
                color: "#fff",
                fontFamily:"serif",
                fontSize:"30px",
                fontWeight: "550",
                letterSpacing: "4px",
            }}
            >
                IRN
            </Stack>
        </Box>

    )
}