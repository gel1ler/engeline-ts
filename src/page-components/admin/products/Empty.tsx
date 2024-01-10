'use client'
import React from 'react'
import { useState } from 'react'
import Modal from '../modal/Modal'
import { Button } from '@mui/material'
import AddButton from '@/components/UI/buttons/add'

const Empty = ({ folders }: { folders: any[]}) => {
    const [openCreate, setOpenCreate] = useState(false)

    return (
        <>
            <Modal
                productNames={[]}
                setOpen={setOpenCreate}
                open={openCreate}
                folders={folders}
            />
            <AddButton onClick={() => setOpenCreate(true)} />
        </>
    )
}

export default Empty