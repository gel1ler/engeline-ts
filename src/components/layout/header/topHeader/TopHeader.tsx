'use client'
import React from 'react'
import Box from '@mui/material/Box'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import { SnackbarProvider } from 'notistack'
import styled from '@emotion/styled'
import DoLink from './DoLink'
import Phone from '@/services/phone'
import Email from '@/services/email'
import Address from '@/services/address'

const StyledSnackbarProvider = styled(SnackbarProvider)(`
&.SnackbarItem-contentRoot {
  background-color: #eeeeee;
  font-size: 25px;
  color: black
}
`)

const TopHeader = ({ noBg }: { noBg?: boolean }) => {
    const theme = useTheme()
    const isLg = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <StyledSnackbarProvider maxSnack={4} autoHideDuration={3000}>
            <Box
                className={`w-screen p-1 justify-items-center grid z-100`}
                sx={{
                    gridTemplateColumns: ['', '', 'repeat(3, 1fr)'],
                    bgcolor: noBg ? null : 'additional.main'
                }}>
                {isLg && <Email />}
                <Phone bold />
                {isLg && <Address />}
            </Box>
        </StyledSnackbarProvider>
    )
}

export default TopHeader
