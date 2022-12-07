import { Stack } from '@mui/material';
import React from 'react';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"

export const PageNow = () => {
    const { pageNow } = useContext(GlobalContext)

    const TitlePagenow = () => {
        if(pageNow.toLowerCase() === "ao vivo"){
            return(
                <Stack sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    color: "#fff",
                    fontFamily: "monospace",
                    textAlign: "center",
                    background: "#2c2c2c",
                    paddingBottom: 2,
                    paddingTop: 2,
                }}>
                    {pageNow}
                </Stack>
            )
        } else{
            return(
                <Stack sx={{
                    fontSize: 35,
                    fontWeight: 600,
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    paddingBottom: 4,
                    paddingTop: 4,
                    color:"#353535"
                }}>
                    {pageNow}
                </Stack>
            )
        }
    }
    return (TitlePagenow())
}