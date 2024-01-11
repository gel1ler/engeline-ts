import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormCheckbox = ({ children, name, notReq }: { children: any, name: string, notReq?: boolean }) => {
    const { register, formState: { errors } } = useFormContext()

    console.log(errors[name])

    return (
        <FormControlLabel
            label={children}
            control={
                <Checkbox
                    color='secondary'
                    sx={{
                        color: errors[name] ? "error.main" : 'initial',
                    }}
                />
            }
            {...register(name, { required: "Согласитесь с политикой обработки персональных данных" })}
        />
    )
}

export default RHookFormCheckbox