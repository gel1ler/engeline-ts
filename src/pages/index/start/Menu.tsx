import React from 'react'
import { Typography, Box } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

const style = {
    fontSize: '16px',
    fontWeight: 'bold'
}

const Menu = () => {
    return (
        <Box sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            background: 'rgba(203, 194, 185, 0.4)',
            backdropFilter: 'blur(5px)',
            borderTopRightRadius: '50px',
            pr: 8,
            pl: 4,
            py: 1,
            zIndex: 999,
            transition: 'opacity .2s ease',
            display: ['none', 'none', 'flex']
        }}>
            <Box
                sx={{
                    gap: 10,
                    width: 'max-content',
                    display: 'flex'
                }}
            >
                <Link href='#about_anchor'>
                    <Typography className="animUnderline" sx={style}>
                        О компании
                    </Typography>
                </Link>
                <Link href='#contacts_anchor'>
                    <Typography className="animUnderline" sx={style}>
                        Контакты
                    </Typography>
                </Link>
                <Link href='#products_anchor'>
                    <Typography className="animUnderline" sx={style}>
                        Продукция
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}

export default Menu