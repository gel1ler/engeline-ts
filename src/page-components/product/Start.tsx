import React from 'react'
import Fill from '@/components/UI/Fill'
import { TProduct } from '@/globalTypes'
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Title from '@/components/UI/text/Title'
import Link from 'next/link'

const Start = ({ product }: { product: TProduct }) => {
    return (
        <Box className='relative flex items-center h-screen'>
            <Image
                fill
                src={product.mainImg}
                sizes="(max-width: 768px) 100vw"
                alt={`Картинка ${product.name}`}
                className='-z-40 object-cover h-full'
                style={{
                    left: '15%',
                }}
            />
            <Fill type='to anchor' anchor='to right' prc={40} />
            <Fill type='to anchor' anchor='to top' />
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
                    <Typography color='GrayText' data-aos='fade-up' sx={{ textAlign: ['center', 'center', 'left'] }}>
                        <Link href='/'>Главная</Link> → <Link href='/products'>Продукция</Link> → <Link href={`/products/${product.id}`}>{product.name}</Link>
                    </Typography>
                    <Title>{product.name}</Title>
                    <Typography variant='h6' className='w-1/2 mx-auto' data-aos='fade-up' sx={{ textAlign: ['center', 'center', 'left'] }}>
                        {product.shortDescription}
                    </Typography>
                    <Link href='#order_anchor'>
                        <Button
                            color='secondary'
                            variant='outlined'
                            size='large'
                            sx={{
                                mt: 3
                            }}
                            data-aos='fade-right'
                            data-aos-offset="20"
                        >
                            оформить заказ
                        </Button >
                    </Link >
                </Box>
            </Container >
        </Box>
    )
}

export default Start