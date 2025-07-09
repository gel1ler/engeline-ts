'use client'
import React, { use } from 'react'
import { Box, Typography } from '@mui/material'
import AdminProducts from './products/AdminProducts'
import { TProduct } from '@/globalTypes'
import { useUser } from '@/hooks/useUser'

type Props = {
  folders: any[]
  products: TProduct[]
}

const admins = [
  'abanichev16@gmail.com',
]

const AdminPage = ({ folders, products }: Props) => {
  const { user, loading } = useUser()

  if (loading) {
    return <Typography>Загрузка...</Typography>
  }

  if (!user) {
    return (
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>Вы не авторизованы</Typography>
      </Box>
    )
  }

  if (user.email && !admins.includes(user.email)) {
    return (
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography>Доступ запрещён</Typography>
      </Box>
    )
  }

  return <AdminProducts products={products} folders={folders} />
}

export default AdminPage