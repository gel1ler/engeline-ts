import React from 'react'
import Box from '@mui/material/Box'
import { getProducts } from '@/../firebase/clientApp'
import { getFolders } from '@/../firebase/clientApp'
import AdminProducts from '@/page-components/admin/products/Index'
import Empty from '@/page-components/admin/products/Empty'

const Products = async () => {
    const folders = await getFolders()
    try {
        const products = await getProducts()
        return (
            <Box className='mt-20'>
                <AdminProducts products={products} folders={folders} />
            </Box>
        )
    }
    catch (err) {
        return (
            <Box className='w-screen h-screen flex items-center justify-center'>
                <Empty folders={folders} />
            </Box>
        )
    }
}

export default Products