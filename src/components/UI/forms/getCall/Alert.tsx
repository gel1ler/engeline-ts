import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TSetBool } from '@/globalTypes';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog({ open, setOpen }: { open: boolean, setOpen: TSetBool }) {
    const handleClose = () => {
        setOpen(false)
    }

    React.useEffect(() => {
        setTimeout(() => setOpen(false), 3500)
    }, [open])

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            PaperProps={{
                style: {
                    borderRadius: 10,
                    padding: 10
                }
            }}
        >
            <DialogTitle textAlign='center'>Вы успешно оставили заявку</DialogTitle>
            <DialogContent>
                <DialogContentText textAlign='center'>
                    Мы перезвоним Вам в течении <b>15 минут</b>
                </DialogContentText>
            </DialogContent>
            <Button sx={{ mb: 2, mx: 'auto', width: 'fit-content' }} color='secondary' onClick={handleClose}>Закрыть окно</Button>
        </Dialog>
    );
}