'use client'
import { UserButton, useAuth, useSession, useUser } from '@clerk/nextjs'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Empty from './products/Empty';
import AdminProducts from './products/AdminProducts';
import { TProduct } from '@/globalTypes'

function checkUserRole(session: any) {
    if (
        !session ||
        !session.user ||
        !session.user.organizationMemberships ||
        session.user.organizationMemberships.length === 0
    ) {
        return null; // Return null if the user is not a basic member
    }

    const organizationMemberships = session.user.organizationMemberships;

    // Loop through all organization memberships
    for (const membership of organizationMemberships) {
        if (membership.role) {
            return membership.role.toLowerCase(); // Return the role in lowercase if it exists
        }
    }

    return null; // Return null if no role is found in the memberships
}

const Index = ({ folders, products }: { folders: any[], products: TProduct[] }) => {
    const { getToken } = useAuth()
    const [token, setToken] = useState('')

    useEffect(() => {
        const get = async () => {
            const tempToken = await getToken({ template: "integration_firebase" })
            if (tempToken) {
                setToken(tempToken)
            }
        }
        get()
    }, [])

    const { isLoaded, isSignedIn } = useUser()

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    const { session } = useSession();
    const userRole = checkUserRole(session)

    if (userRole !== 'org:admin') {
        return (
            <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                <UserButton afterSignOutUrl='/' />
                <Typography textAlign='center'>
                    Вы не имеете доступа к этой странице
                </Typography>
            </Box>
        )
    }

    if (products.length === 0) {
        return (
            <Box className='w-screen h-screen flex items-center justify-center'>
                <Empty token={token} folders={folders} />
            </Box>
        )
    }

    return (
        <Box className='mt-20'>
            <AdminProducts token={token} products={products} folders={folders} />
        </Box>
    )


}

export default Index