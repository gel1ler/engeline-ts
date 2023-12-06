import { navigation } from '@/content/content'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Text = ({ children }: { children: string }) => {
    return (
        <Typography className='opacity-0'>
            {children}
        </Typography>
    )
}

const NavLinks = () => {
    return (
        <Box className='flex gap-12 items-center'>
            <Link href='/'>
                <Text>
                    Главная
                </Text>
            </Link>
        </Box >
    )
}

export default NavLinks