import React from 'react'
import Fill from '@/components/UI/Fill'
import DescriptionList from '@/components/UI/text/DescriptionList'
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
                    height: '100%'
                }}
                maxWidth={false}
            >
                <Box className=' flex flex-col gap-2'>
                    <Title>{product.name}</Title>
                    <Typography variant='h6' className='w-1/2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam illo doloribus nemo provident in, pariatur architecto harum voluptates odit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veniam illo doloribus nemo provident in, pariatur architecto harum voluptates odit.
                    </Typography>
                    <Link href='#order_anchor'>
                        <Button
                            color='secondary'
                            variant='outlined'
                            size='large'
                            sx={{
                                mt: 4
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