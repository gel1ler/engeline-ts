'use client'
import React from 'react'
import {
    Box,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from '@mui/material'
import { deleteProduct } from '@/../firebase/clientApp'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Modal from '@/page-components/admin/products/modal/Modal'
import AddButton from '@/components/UI/buttons/add'
import Subtitle from '@/components/UI/text/Subtitle'
import { TProduct } from '@/globalTypes'

const AdminProducts = ({ products, folders }: { products: TProduct[], folders: any[] }) => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openChange, setOpenChange] = useState(false)
    const [selected, setSelected] = useState<TProduct>()

    const router = useRouter()

    const deleteHandler = async (id: number) => {
        await deleteProduct(id).then(() => router.refresh())
    }

    const openChangeHandler = (row: TProduct) => {
        setSelected(row)
        setOpenChange(true)
    }

    return (
        <>
            <Modal
                setOpen={setOpenCreate}
                open={openCreate}
                folders={folders}
            />
            <Modal
                product={selected}
                setOpen={setOpenChange}
                open={openChange}
                folders={folders}
                change
            />
            <Container sx={{ maxWidth: '1600px', width: ['98vw', '98vw', '98vw', '90vw'] }} maxWidth={false}>
                <Subtitle>Админ панель - продукция</Subtitle>
                <Box sx={{ p: 4 }}>
                    <AddButton onClick={() => setOpenCreate(true)} />
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">Наименование</TableCell>
                                    <TableCell align="center">Изменить</TableCell>
                                    <TableCell align="center">Удалить</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products ? products.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell align="center">{row.id}</TableCell>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                color='secondary'
                                                onClick={() => openChangeHandler(row)}
                                            >
                                                Изменить
                                            </Button>
                                        </TableCell>
                                        <TableCell align="center"><Button color='error' onClick={() => deleteHandler(row.id)}>Удалить</Button></TableCell>
                                    </TableRow>
                                )) : null}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </>
    )
}

export default AdminProducts