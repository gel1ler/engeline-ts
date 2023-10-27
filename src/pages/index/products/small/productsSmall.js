import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import SmallProductTitle from './productTitleSmall'

const SmallProducts = ({ products }) => {
    return (
        <Box
            id='products_anchor'
            sx={{
                mt: 7
            }}
        >
            {products.slice(0, 4).map((product, key) =>
                <Box
                    key={key}
                    sx={{
                        height: '100vh',
                        position: 'relative',
                        px: 2,
                    }}
                >
                    <Image
                        alt='Главное фото продукта'
                        src={product.mainImg}
                        fill
                        style={{
                            zIndex: -1,
                            objectFit: 'cover',
                            position: 'absolute',
                            left: 0
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'linear-gradient(to bottom, white 15%, rgba(255,255,255,0.4) 60%, white 70%)',
                            zIndex: -1
                        }}
                    />
                    <SmallProductTitle
                        title={product.name}
                        link={'/products/' + product.id}
                        props={product.props}
                        num={key}
                        mainImg={product.mainImg}
                        additionalImg={product.additionalImg}
                    />
                </Box >
            )}
        </Box >
    )
}

export default SmallProducts