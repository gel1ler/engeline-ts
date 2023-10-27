'use client'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { Drawer, Box, useMediaQuery } from '@mui/material'
import { Close } from '@mui/icons-material'
import IB from '@/components/icons/IB'
import { MenuIcon } from '@/components/icons/UI'
import NavLinks from './NavLinks'


const MyDrawer = () => {
    const [open, setOpen] = useState(false)
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <MenuIcon setOpen={() => setOpen(true)} />
            <Drawer open={open} onClose={() => setOpen(false)} anchor={isSmallScreen ? 'top' : 'right'}>
                <Box
                    className='h-screen'
                    sx={{
                        width: ['100vw', '60vw', '40vw', '30vw'],
                    }}
                >
                    <Box className='relative h-screen'>
                        <IB
                            f={() => setOpen(false)}
                            sx={{
                                position: 'absolute',
                                right: 10,
                                top: 10,
                            }}
                        >
                            <Close sx={{ fontSize: '35px' }} />
                        </IB>
                        <NavLinks />
                    </Box>
                </Box>
            </Drawer >
        </>
    )
}

export default MyDrawer