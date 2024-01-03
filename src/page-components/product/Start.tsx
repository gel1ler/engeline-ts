'use client'
import React, { useState } from 'react'
import Fill from '@/components/UI/Fill'
import { TProduct } from '@/globalTypes'
import { Box, Button, Container, Modal, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import Title from '@/components/UI/text/Title'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'
import Form from '@/components/UI/forms/getCall/Form'

const Start = ({ product }: { product: TProduct }) => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('lg'))
    const [open, setOpen] = useState(false)

    return (
        <Box className='relative flex items-center h-screen overflow-hidden'>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box>
                    <Form />
                </Box>
            </Modal>
            <Image
                fill
                priority={true}
                src={product.mainImg}
                sizes="100vw"
                alt={`Картинка ${product.name}`}
                className='-z-40 object-cover h-full'
                style={{
                    left: isMd ? '' : '15%',
                }}
            />
            {!isMd ?
                <>
                    <Fill type='to anchor' anchor='to right' prc={40} />
                    <Fill type='to anchor' anchor='to top' />
                </>
                :
                <>
                    <Box className='absolute top-0 left-0 w-screen h-screen -z-10' sx={{ background: 'radial-gradient(white, transparent)' }} />
                    <Box className='absolute top-0 left-0 w-screen h-screen bg-white opacity-80 -z-10' />
                </>
            }
            <Container
                sx={{
                    maxWidth: ['98vw', '98vw', '98vw', '1600px'],
                    width: '90vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 10
                }}
                maxWidth={false}
            >
                <Box className='flex flex-col' sx={{ alignItems: ['center', 'center', 'start'] }}>
                    <Typography color='GrayText' sx={{ textAlign: ['center', 'center', 'left'], display: ['none', 'none', 'block'] }}>
                        <Link href='/'>Главная</Link> → <Link href='/products'>Продукция</Link> → <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </Typography>
                    <Title noAos>{product.name}</Title>
                    <Typography
                        variant='h6'
                        sx={{
                            width: ['100%', '100%', '50%'],
                            textAlign: ['center', 'center', 'left']
                        }}
                    >
                        {product.shortDescription}
                    </Typography>
                    <Button
                        color='secondary'
                        variant='outlined'
                        size='large'
                        sx={{
                            mt: 3
                        }}
                        data-aos-offset="20"
                        onClick={() => setOpen(true)}
                    >
                        оформить заказ
                    </Button>
                </Box>
            </Container >
        </Box>
    )
}

export default Start