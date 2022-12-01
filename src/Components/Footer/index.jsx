import { Box, Stack, Link } from '@mui/material';
import React from 'react';
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
    const socialIcon = {
        marginBottom: 4,
        '&:hover': {
            color: '#b4b4b44b',
        },
    }
    const InfoFooter = {
        cursor: "pointer",
        opacity: 0.6,
        color: "#fff",
    }
    return (
        <Box
            sx={{
                width: "100%",
                bottom: 0,
                left: 0,
                height: "300px",
                backgroundColor: "#1a1a1a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Stack
                sx={{
                    textAlign: "center",
                    color: "#fff",
                    fontFamily: "serif",
                    fontSize: "30px",
                    fontWeight: "550",
                    letterSpacing: "4px",
                    marginBottom: 4,
                }}
            >
                IRN
            </Stack>
            <Stack direction="row" spacing={2}>
                <Link
                    sx={socialIcon}
                    target="_blank"
                    href='https://www.instagram.com/'><AiFillInstagram color='#fff' fontSize={50} />
                </Link>
                <Link
                    target="_blank"
                    href='https://web.whatsapp.com/'><IoLogoWhatsapp color='#fff' fontSize={50} />
                </Link>
                <Link
                    target="_blank"
                    href='https://www.youtube.com/'><AiFillYoutube color='#fff' fontSize={50} />
                </Link>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Link href="/Legal" underline="hover" color="inherit" sx={InfoFooter}>Legal</Link>
                <Link href="/Cookies" underline="hover" color="inherit" sx={InfoFooter}>Cookies</Link>
                <Link href="/Privacy" underline="hover" color="inherit" sx={InfoFooter}>Privacy</Link>
                <Link href="/Shipping" underline="hover" color="inherit" sx={InfoFooter}>Shipping</Link>
                <Link href="/InfoFooter" underline="hover" color="inherit" sx={InfoFooter}>Refounds</Link>
            </Stack>
            <span style={{
                color: "#f2f2f2",
                opacity: 0.3,
                textAlign: "center",
                marginTop: 20,
            }}>
                &copy;2022, Newsletter IRN. All rights reserved.
            </span>
        </Box >

    )
}