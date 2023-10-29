import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'

const AddButton = ({ onClick }) => {
    return (
        <Button className='row-centered' color='success' onClick={onClick}>
            Добавить
            <AddIcon fontSize='small' />
        </Button>
    )
}

export default AddButton