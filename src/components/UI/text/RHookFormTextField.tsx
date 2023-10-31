import { TextField } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormTextField = ({ label, name }: { label: string, name: string }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <TextField
            color='secondary'
            variant='outlined'
            label={label}
            error={!!errors[name]}
            helperText={errors[name]?.message ?? ''}
            {...register(name, { required: "Введите " + label.toLowerCase() })}
        />
    )
}

export default RHookFormTextField