'use client'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Empty from './products/Empty';
import AdminProducts from './products/AdminProducts';
import { TProduct } from '@/globalTypes'

const Index = ({ folders, products }: { folders: any[], products: TProduct[] }) => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
            {/* <UserButton afterSignOutUrl='/' /> */}
            <Typography textAlign='center'>
                Вы не имеете доступа к этой странице
            </Typography>
        </Box>
    )

    return (
        <Box className='mt-20'>
            <AdminProducts products={products} folders={folders} />
        </Box>
    )


}

export default Index