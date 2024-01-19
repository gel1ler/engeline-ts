import { links, navigation } from '@/content/content'
import { TSetBool } from '@/globalTypes'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const Text = ({ children, href, setOpen }: any) => (
    <Link href={href} onClick={() => setOpen(false)}>
        <Typography
            className='transition-all duration-200'
            variant='h6'
            sx={{
                ':hover': {
                    color: 'secondary.main'
                }
            }}
        >
            {children.toUpperCase()}
        </Typography >
    </Link>
)


const NavLinks = ({ setOpen }: { setOpen: TSetBool }) => {
    return (
        <Box className='flex flex-col gap-8 items-center'>
            <Text href='/' setOpen={setOpen}>
                Главная
            </Text>
            <Text href='/prod' setOpen={setOpen}>
                Производство
            </Text>
            <Text href='/products' setOpen={setOpen}>
                Продукция и услуги
            </Text>
            <Text href='#contacts_anchor' setOpen={setOpen}>
                Контакты
            </Text>
        </Box >
    )
}

export default NavLinks