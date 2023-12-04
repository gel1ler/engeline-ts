import 'react-international-phone/style.css';

import {
    BaseTextFieldProps,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography,
    styled,
} from '@mui/material';
import React from 'react';
import {
    CountryIso2,
    defaultCountries,
    FlagImage,
    parseCountry,
    usePhoneInput,
} from 'react-international-phone';

export interface MUIPhoneProps extends BaseTextFieldProps {
    value: string;
    onChange: (phone: string) => void;
}

export const MuiPhone: React.FC<MUIPhoneProps> = ({
    value,
    onChange,
    ...restProps
}) => {

    const { inputValue, handlePhoneValueChange, inputRef } =
        usePhoneInput({
            defaultCountry: 'ru',
            value,
            countries: defaultCountries,
            onChange: (data) => {
                onChange(data.phone === '+8' ? '+7' : data.phone)
            },
        });

    return (
        <TextField
            variant="outlined"
            color="secondary"
            // placeholder='+7 (XXX) XXX-XX-XX'
            label='Номер телефона'
            sx={{ width: '100%' }}
            InputLabelProps={{ shrink: true }}
            value={inputValue}
            onChange={handlePhoneValueChange}
            type="tel"
            error={!inputValue}
            inputRef={inputRef}
            {...restProps}
        />
    );
};

export default MuiPhone