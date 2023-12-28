'use client'
import { ArrowDropDown } from '@mui/icons-material';
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

interface IText {
    children: string
    href: string
    noUpper?: boolean
}

type TLinks = {
    text: string
    href: string
}

const Text = ({ children, href, noUpper }: IText) => (
    <Link href={href}>
        <Typography
            className='transition-all duration-200'
            sx={{
                fontSize: noUpper ? 15 : 14,
                ':hover': {
                    color: 'secondary.main'
                }
            }}
        >
            {noUpper ? children : children.toUpperCase()}
        </Typography >
    </Link>
)

const Menu = ({ links, isVisible }: { links: TLinks[], isVisible: boolean }) =>
    <Box className=' overflow-hidden'>
        <Box
            className='bg-white opacity-0 absolute flex flex-col gap-4 transition-all duration-300 w-max p-6 top-full'
            sx={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'all' : 'none',
                boxShadow: '0 2px 6px 2px rgba(0,0,0,.2)',
            }}
        >
            {links.map((i, key) =>
                <Text href={i.href} key={key} noUpper>
                    {i.text}
                </Text>
            )}
        </Box>
    </Box>

const DropDown = ({ children, href, links }: { children: string, href: string, links: TLinks[] }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            position='relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{ pb: 1, mt: 1 }}
        >
            <Link href={href}>
                <Typography
                    className='transition-all duration-200 flex items-center relative'
                    sx={{
                        fontSize: 14,
                        color: isHovered ? 'secondary.main' : '',
                    }}
                >
                    {children.toUpperCase()}
                    <ArrowDropDown className='icon-228' sx={{ transition: 'transform .2s ease-out', transform: `rotate(${isHovered ? -180 : 0}deg)` }} />
                </Typography >
            </Link>
            <Menu links={links} isVisible={isHovered} />
        </Box>
    )
}



const NavLinks = () => {
    return (
        <Box className='flex gap-12 items-center'>
            <Text href='/'>
                Главная
            </Text>
            <DropDown
                href='/prod'
                links={[
                    {
                        text: 'Первомайскхиммаш',
                        href: '/prod#factory_anchor'
                    },
                    {
                        text: 'Антикоррозийное покрытие',
                        href: '/prod#ac_anchor'
                    },
                    {
                        text: 'Лаборатория',
                        href: '/prod#lab_anchor'
                    },
                ]}
            >
                Производсвто
            </DropDown>
            <DropDown
                href='/products'
                links={[
                    {
                        text: 'Механическая обработка',
                        href: '/products/0'
                    },
                    {
                        text: 'Емкостное химическое и машинное оборудование',
                        href: '/products/1'
                    },
                    {
                        text: 'Муфты ремонтные стальные',
                        href: '/products/2'
                    },
                    {
                        text: 'Соединительные детали трубопроводов',
                        href: '/products/3'
                    },
                    {
                        text: 'Трубы обечаечные, корпуса, бандажи',
                        href: '/products/4'
                    }
                ]}
            >
                Продукция и услуги
            </DropDown>
            <Text href='#contacts_anchor'>
                Контакты
            </Text>
        </Box >
    )
}

export default NavLinks