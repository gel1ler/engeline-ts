import { TextField } from '@mui/material'
import React from 'react'

const Field = ({
    multiline, label, value, setValue
}: {
    multiline?: boolean, label?: string, value: string, setValue: (value: any) => void
}
) => {
    return (
        <TextField
            sx={{ width: '100%' }}
            multiline={multiline}
            label={label}
            color='secondary'
            variant='outlined'
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    )
}

export default Field