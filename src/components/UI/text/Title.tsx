import Typography from '@mui/material/Typography'
import React, { ReactNode } from 'react'

const Title = ({
    children, centered, right
}: {
    children: ReactNode, centered?: boolean, right?: boolean,
}) => {
    return (
        <Typography
            variant='h3'
            textAlign={centered ? 'center' : 'left'}
            sx={{
                mx: right ? null : centered ? 'auto' : ['auto', 'auto', 0],
                mb: 3,
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