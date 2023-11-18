import Typography from '@mui/material/Typography'
import React, { ReactNode } from 'react'

const Subtitle = ({
    children, centered, right
}: {
    children: ReactNode, centered?: boolean, right?: boolean
}) => {
    return (
        <Typography
            variant='h4'
            textAlign={centered ? 'center' : 'left'}
            sx={{
                mx: right ? null : centered ? 'auto' : ['auto', 'auto', 0],
                ml: 'auto',
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