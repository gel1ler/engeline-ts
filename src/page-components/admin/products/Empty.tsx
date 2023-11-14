'use client'
import React from 'react'
import { useState } from 'react'
import Modal from '@/page-components/admin/products/modal/Modal'
import { Button } from '@mui/material'
import AddButton from '@/components/UI/buttons/add'

const Empty = ({ folders }: { folders: any[] }) => {
    const [openCreate, setOpenCreate] = useState(false)

    return (
        <>
            <Modal
                setOpen={setOpenCreate}
                open={openCreate}
                folders={folders}
            />
            <AddButton onClick={() => setOpenCreate(true)} />
        </>
    )
}

export default Empty