import { TSetBool } from '@/globalTypes'
import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'

const SureModal = ({ open, setOpen }: { open: boolean, setOpen: TSetBool }) => {
    return (
        <Modal
            onClose={() => setOpen(false)}
            open={open}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    bgcolor: 'white',
                    borderRadius: '10px',
                    p: 3,
                    maxWidth: '40vw',
                    gap: 3
                }}
                className='column-centered'
            >
                <Typography textAlign='center' variant='h6'>
                    Вы можете оставить заявку с описанием конкретной продукции. Таким образом нам легче будет ее обработать и предоставить Вам быстрый и четкий ответ.
                </Typography>
                <Box sx={{ display: 'flex', gap: 3 }}>
                    <Button variant='outlined' color='secondary'>
                        Заказать звонок
                    </Button>
                    <Button variant='contained' color='secondary'>
                        Оформить заявку
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default SureModal