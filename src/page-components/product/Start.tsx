import React from 'react'
import Fill from '@/components/UI/Fill'
import MoreButton from '@/components/UI/buttons/MoreButton'
import Form from '@/components/UI/forms/Form'
import DescriptionList from '@/components/UI/text/DescriptionList'
import { headerProps } from '@/customization/customization'
import { TProduct } from '@/globalTypes'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import Title from '@/components/UI/text/Title'

const Start = ({ product }: { product: TProduct }) => {
    return (
        <Box className='relative flex items-center' sx={{ height: `calc(100vh - ${headerProps.remHeight}rem)` }}>
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
                    <DescriptionList gap={4} props={product.props} />
                    <MoreButton href='#' sx={{ mt: 4 }} />
                </Box>
                <Box className='flex flex-col justify-end h-2/3'>
                    <Form />
                </Box>
            </Container >
        </Box>
    )
}

export default Start