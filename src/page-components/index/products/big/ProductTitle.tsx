import React from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import Subtitle from '@/components/UI/text/Subtitle'
import Image from 'next/image'
import DescriprionList from '@/components/UI/text/descriprionList'
import { TProp } from '@/globalTypes'

const ProductTitle = ({
    title, num, props, link
}: {
    title: string, num: number, props: TProp[], link: string
}) => {
    return (
        <Box>
            <Subtitle right={num % 2 == 1 ? true : false}>
                {`${title}`}
            </Subtitle>
            <Box>
                <DescriprionList fade props={props} align={num % 2 == 1 ? 'flex-end' : 'start'} />
                <Link href={link} data-aos='fade-up'>
                    <Typography
                        variant='h6'
                        sx={{
                            textDecoration: 'underline',
                            mt: 4
                        }}
                        data-aos='fade-up'
                        textAlign={num % 2 == 1 ? 'right' : 'left'}
                    >
                        Подробнее
                    </Typography>
                </Link>
            </Box>
        </Box >
    )
}

export default ProductTitle