import React from 'react'
import { AppBar } from '@mui/material'
import Bar from '../Bar/Bar'

const StaticHeader = () => {
    return (
        <AppBar position='static'>
            <Bar />
        </AppBar>
    )
}

export default StaticHeader