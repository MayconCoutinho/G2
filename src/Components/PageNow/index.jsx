import { Stack } from '@mui/material';
import React from 'react';
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"

export const PageNow = () => {
    const { pageNow } = useContext(GlobalContext)

    return (
        <Stack sx={{
            fontSize: 35,
            fontWeight: 600,
            fontFamily: "unset",
            textAlign: "center"
        }}>
            {pageNow}
        </Stack>

    )
}