import { TextField } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormTextField = ({ label, name, fullWidth, multiline }: { label: string, name: string, fullWidth?: boolean, multiline?: boolean }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <TextField
            color='secondary'
            variant='outlined'
            multiline={multiline}
            label={label}
            error={!!errors[name]}
            helperText={<> {errors[name]?.message ?? ''}</>}
            fullWidth={fullWidth}
            {...register(name, { required: "Введите " + label.toLowerCase() })}
        />
    )
}

export default RHookFormTextField