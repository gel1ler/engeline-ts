import Typography from '@mui/material/Typography'
import React, { ReactNode } from 'react'

const Subtitle = ({
    children, centered, right, variant
}: {
    children: ReactNode, centered?: boolean, right?: boolean, variant?: 'h5' | 'h4' | 'h3'
}) => {
    return (
        <Typography
            variant={variant ? variant : 'h4'}
            sx={{
                mx: right ? null : centered ? 'auto' : ['auto', 'auto', 0],
                ml: 'auto',
                textAlign: centered ? 'center' : ['center', 'center', 'left'],
                textDecoration: 'underline',
                textDecorationColor: '#E5A019',
                textUnderlineOffset: '8px',
                textDecorationThickness: '2px'
            }}
            data-aos='fade-up'
        >
            {children}
        </Typography>
    )
}

export default Subtitle