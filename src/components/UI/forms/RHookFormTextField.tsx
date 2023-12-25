import { TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormTextField = ({ label, name, fullWidth, multiline, notReq }: { label: string, name: string, fullWidth?: boolean, multiline?: boolean, notReq?: boolean }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <TextField
            color='secondary'
            variant='outlined'
            multiline={multiline}
            rows={multiline ? 4 : 1}
            label={label}
            error={!!errors[name]}
            helperText={<> {errors[name]?.message ?? ''}</>}
            fullWidth={fullWidth}
            {...register(name, notReq ? {} : { required: "Введите " + label.toLowerCase() })}
        />
    )
}

export default RHookFormTextField