import React from 'react'
import { getProducts } from '@/../firebase/clientApp'
import { getFolders } from '@/../firebase/clientApp'
import Index from '@/page-components/admin/Index'
import { useAuth } from '@clerk/nextjs'

const Products = async () => {
    const folders = await getFolders()
    const products = await getProducts()

    return (
        <Index products={products} folders={folders} />
    )
}

export default Products