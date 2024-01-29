import Typography from '@mui/material/Typography'
import React, { ReactNode } from 'react'

const Title = ({
    children, centered, variant, mdCenter, noAos
}: {
    children: ReactNode, centered?: boolean, variant?: 'h2' | 'h3' | 'h4', mdCenter?: boolean, noAos?: boolean
}) => {
    return (
        <Typography
            variant={variant ? variant : 'h1'}
            sx={{
                mx: centered ? 'auto' : ['auto', 'auto', mdCenter ? 'auto' : 0, 0],
                mb: 2,
                textAlign: centered ? 'center' : ['center', 'center', mdCenter ? 'center' : 'left', 'left'],
                width: 'fit-content',
                textDecoration: 'underline',
                textDecorationColor: '#E5A019',
                textUnderlineOffset: ['7px','10px'],
                textDecorationThickness: '3px',
                maxWidth: ['90vw', '100vw']
            }}
            data-aos={noAos ? '' : 'fade-up'}
        >
            {children}
        </Typography>
    )
}

export default Title