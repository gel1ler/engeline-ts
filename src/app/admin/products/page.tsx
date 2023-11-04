import React from 'react'
import Box from '@mui/material/Box'
import { getProducts } from '@/../firebase/database'
import { getFolders } from '@/../firebase/storage'
import AdminProducts from '@/page-components/admin/products/Index'

const Products = async () => {
    const products = await getProducts()
    const folders = await getFolders()

    return (
        <Box>
            <AdminProducts products={products} folders={folders} />
        </Box>
    )
}

export default Products