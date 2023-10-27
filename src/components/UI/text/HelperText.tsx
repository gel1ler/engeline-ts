import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'

const HelperText = ({ children, white }: { children: ReactNode, white: boolean }) => {
    return (
        <Typography data-aos='fade-up' variant='subtitle1' color={white ? 'primary.main' : 'helper.main'} textAlign='center'>
            {children}
        </Typography>
    )
}

export default HelperText