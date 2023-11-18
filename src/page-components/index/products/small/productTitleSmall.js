import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Title from '@/components/UI/Title'
import Slider from './slider'
import DescriprionList from '@/components/UI/text/descriprionList'

const SmallProductTitle = ({ title, props, href, link, mainImg, additionalImg, num }) => {
    return (
        <Box sx={{ py: '10vh' }}>
            <AnchorLink href={'#' + href}>
                <Title centered>
                    {`${title}`}
                </Title>
            </AnchorLink>
            <Slider
                imgs={[mainImg, ...additionalImg]}
            />
            <Box>
                <DescriprionList fade props={props} textAlign={num % 2 == 1 ? 'right' : null} />
                <Link href={link} data-aos='fade-up'>
                    <Typography
                        variant='h6'
                        sx={{
                            textDecoration: 'underline',
                            mt: 4
                        }}
                        data-aos='fade-up'
                        textAlign='center'
                    >
                        Подробнее
                    </Typography>
                </Link>
            </Box>
        </Box >
    )
}

export default SmallProductTitle