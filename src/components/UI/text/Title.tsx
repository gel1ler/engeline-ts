import Typography from '@mui/material/Typography'
import React, { ReactNode } from 'react'

const Title = ({
    children, centered, right, h2
}: {
    children: ReactNode, centered?: boolean, right?: boolean, h2?: boolean
}) => {
    return (
        <Typography
            variant={h2 ? 'h2' : 'h3'}
            textAlign={centered ? 'center' : 'left'}
            sx={{
                mx: centered ? 'auto' : ['auto', 'auto', 0],
                mb: 3,
                textAlign: centered ? 'center' : ['center', 'center', 'left'],
                width: 'fit-content',
                textDecoration: 'underline',
                textDecorationColor: '#E5A019',
                textUnderlineOffset: '10px',
                textDecorationThickness: '3px'
            }}
            data-aos='fade-up'
        >
            {children}
        </Typography>
    )
}

export default Title