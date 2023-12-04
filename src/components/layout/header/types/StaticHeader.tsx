import React from 'react'
import { AppBar } from '@mui/material'
import Bar from '../Bar/Bar'

const StaticHeader = () => {
    return (
        <AppBar position='relative' sx={{zIndex: 1111}}>
            <Bar />
        </AppBar>
    )
}

export default StaticHeader