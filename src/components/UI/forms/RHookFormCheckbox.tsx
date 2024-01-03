import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormCheckbox = ({ children, name, notReq }: { children: any, name: string, notReq?: boolean }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <FormControlLabel
            label={children}
            control={<Checkbox color='secondary' />}
            {...register(name, { required: "Введите" })}
        />
    )
}

export default RHookFormCheckbox