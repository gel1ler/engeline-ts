import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import {
    Box,
    Typography,
    Modal,
    Button,
    TextField,
    Divider
} from '@mui/material';

type Inputs = {
    name: string
    // shortDescription: string
    // description: string
    // mainImg: string
    // additionalImg: string[]
}

const MyModal = ({
    setOpen,
    open,
    folders,
    change,
    product
}: {
    setOpen: (value: boolean) => void;
    open: boolean;
    folders: string[];
    change: any;
    product: any;
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl p-10 overflow-y-scroll bg-white'
                sx={{
                    width: '90vw',
                    height: '80vh',
                }}
            >
                <Typography variant='h6'>
                    {change ? 'Изменение' : 'Создание'} продукта
                </Typography>
                <form className='flex flex-col gap-4 my-6' onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <TextField
                            color='secondary'
                            variant='outlined'
                            label='Наименование'
                            {...register("name", { required: "Введите наименование" })}
                        />
                        {errors.name && (
                            <Typography variant='subtitle2' color="error">{errors.name.message}</Typography>
                        )}
                    </Box>

                    <Button
                        className='w-min'
                        variant="contained"
                        type="submit"
                        color='secondary'
                    >
                        {change ? 'Изменить' : 'Создать'}
                    </Button>

                </form>
            </Box>
        </Modal>
    );
};

export default MyModal;