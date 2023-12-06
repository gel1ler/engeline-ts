import { ArrowDropDown } from '@mui/icons-material';
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface IText {
    children: string;
}

const Text = ({ children }: IText) =>
    <Typography
        className={'transition-all duration-200'}
        sx={{
            fontSize: 14,
            ':hover': {
                color: 'secondary.main'
            }
        }}
    >
        {children.toUpperCase()}
    </Typography >

const DropDown = ({ children }: IText) =>
    <Typography
        className='transition-all duration-200 flex items-center'
        sx={{
            fontSize: 14,
            ':hover': {
                color: 'secondary.main',
                '.icon-228': {
                    transform: 'rotate(-180deg)'
                }
            }
        }}
    >
        {children.toUpperCase()}
        <ArrowDropDown className='icon-228' sx={{ transition: 'transform .2s ease-out' }} />
    </Typography >


const NavLinks = () => {
    return (
        <Box className='flex gap-12 items-center'>
            <Link href='/'>
                <Text>
                    Главная
                </Text>
            </Link>
            <Link href='/prod'>
                <DropDown>
                    Производсвто
                </DropDown>
            </Link>
            <Link href='/products'>
                <DropDown>
                    Продукция
                </DropDown>
            </Link>
            <Link href='#contacts_anchor'>
                <Text>
                    Контакты
                </Text>
            </Link>
        </Box >
    )
}

export default NavLinks