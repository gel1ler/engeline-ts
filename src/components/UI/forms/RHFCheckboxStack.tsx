import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Checkbox, FormGroup } from '@mui/material'

const RHFCheckboxStack = ({
    setState, state, options, maxLength,
}: {
    setState: (value: any) => void, state: any[], options: any[], maxLength?: number
}) => {
    const disabled = maxLength ? state.length >= maxLength : false

    const handleSelect = (value: any) => {
        const isPresent = state?.indexOf(value)
        if (isPresent !== -1) {
            const remaining = state?.filter((item: any) => item !== value);
            setState(remaining);
        } else {
            setState((prevItems: any) => [...prevItems, value]);
        }
    }

    return (
        <FormGroup
            color='secondary'
            defaultChecked
        >
            {
                options.map((i, key) =>
                    <FormControlLabel
                        color='secondary'
                        key={key}
                        checked={state?.includes(i)}
                        onChange={() => handleSelect(i)}
                        label={i}
                        control={<Checkbox color='secondary' disabled={disabled && !state?.includes(i)} />}
                    />
                )
            }
        </FormGroup >
    )
}

export default RHFCheckboxStack