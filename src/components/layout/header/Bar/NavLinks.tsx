import { navigation } from '@/content/content'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React, { CSSProperties } from 'react'

type THoverType = 'opacity' | 'color' | 'underline' | 'animUnderline' | 'bold'

interface IText {
    children: string;
    hoverType: THoverType;
}

const Text = ({ children, hoverType }: IText) => {
    let styles: any = {
        fontSize: 18,
    }

    switch (hoverType) {
        case 'opacity':
            styles = { ...styles, ':hover': { opacity: '.3' } }
            break

        case 'color':
            styles = { ...styles, ':hover': { color: 'red' } }
            break

        case 'underline':
            styles = { ...styles, ':hover': { textDecoration: 'underline' } }
            break

        case 'animUnderline':
            break
        case 'bold':
            styles = { ...styles, ':hover': { textShadow: '0 0 .65px #333, 0 0 .65px #333' } }


    }


    return (
        <Typography
            className={'transition-all duration-200 ' + hoverType}
            sx={styles}
        >
            {children}
        </Typography>
    )
}

const NavLinks = ({ hoverType }: { hoverType: THoverType }) => {
    return (
        <Box className='flex gap-12 items-center'>
            {navigation.map(i =>
                i.anchorLink ?
                    <a key={i.id} href={i.href}>
                        <Text hoverType={hoverType}>
                            {i.name}
                        </Text>
                    </a>
                    :
                    <Link key={i.id} href={i.href}>
                        <Text hoverType={hoverType}>
                            {i.name}
                        </Text>
                    </Link>
            )}
        </Box >
    )
}

export default NavLinks