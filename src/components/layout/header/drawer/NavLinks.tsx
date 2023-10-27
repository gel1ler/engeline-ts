import { navigation } from '@/content/content'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Text = ({ children }: { children: string }) => {
    return (
        <Typography className='opacity-0'>
            {/* {children} */}
        </Typography>
    )
}

const NavLinks = () => {
    return (
        <Box className='flex gap-12 items-center'>
            {navigation.map(i =>
                i.anchorLink ?
                    <a key={i.id} href={i.href}>
                        <Text>
                            {i.name}
                        </Text>
                    </a>
                    :
                    <Link key={i.id} href={i.href}>
                        <Text>
                            {i.name}
                        </Text>
                    </Link>
            )}
        </Box >
    )
}

export default NavLinks