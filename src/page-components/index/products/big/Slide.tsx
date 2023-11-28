import { TProduct } from '@/globalTypes'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Subtitle from '@/components/UI/text/Subtitle'
import DescriptionList from '@/components/UI/text/DescriptionList'
import MoreButton from '@/components/UI/buttons/MoreButton'
import Fill from '@/components/UI/Fill'

const Slide = ({ product }: { product: TProduct }) => {
    return (
        <Box
            className='h-full p-10 relative overflow-hidden'
            sx={{
                width: '60vw',
                boxShadow: '0 0 10px 5px rgba(0,0,0,.2)'
            }}
            data-aos='fade-up'
        >
            <Box className='flex flex-col gap-8 w-fit h-full'>
                <Subtitle>
                    {product.name}
                </Subtitle>
                <DescriptionList fade props={product.props} />
                <Box className='mt-auto'>
                    <MoreButton href={'/products/' + product.id} dataAos='fade-up' />
                </Box>
            </Box>
            <Fill anchor='to right' prc={40} type='to anchor' />
            <Image
                alt='Product png photo'
                src={product.mainImg}
                fill
                className=' object-cover -z-50 opacity-50'
                style={{
                    left: '33%',
                    // top: '10%',
                }}
            />
        </Box>
    )
}

export default Slide