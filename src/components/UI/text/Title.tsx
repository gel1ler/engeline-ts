import React from 'react'
import { Box, Typography } from '@mui/material'

const Title = ({
    title, large, align
}: {
    title: string, large?: boolean, align: 'left' | 'center' | 'right'
}) => {
    return (
        <Box
            sx={{
                width: 'max-content',
                py: 2,
                ml: align == 'left' ? 'auto' : null,
                mx: align == 'center' ? 'auto' : null,
            }}
        >
            <Typography variant={large ? 'h1' : 'h2'}>
                {title}
            </Typography>
            <Box sx={{ bgcolor: 'secondary.main', height: '4px' }} />
        </Box>
    )
}

export default Title