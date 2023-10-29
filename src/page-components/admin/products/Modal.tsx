import React, { useState, useEffect } from 'react'
import { createProduct, changeProduct } from '@/../firebase/database'
import {
    Box,
    Typography,
    Modal,
    Button,
    TextField,
    Divider
} from '@mui/material'
import ChooseImg from './chooseImg'
import Link from 'next/link'
import IconInputList from '@/components/UI/text/iconInputList'
import PhotoInputList from '@/components/UI/text/photoInputList'
import { TProduct, TSetBool } from '@/globalTypes'
import { useRouter } from 'next/navigation'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
    width: '90vw',
    height: '80vh',
    overflowY: 'scroll'
}

const Field = ({ label, state, setState }) => {
    return (
        <TextField
            sx={{ width: '100%' }}
            multiline
            label={label}
            color='secondary'
            variant="outlined"
            value={state}
            onChange={event => setState(event.target.value)}
        />
    )
}

const MyModal = ({
    setOpen, open, folders, change, product
}: {
    setOpen: TSetBool, open: boolean, folders: string[], change?: boolean, product: TProduct
}

) => {
    const router = useRouter()

    //Choose Image state
    const [isMain, setIsMain] = useState(true)

    //Inputs
    const [name, setName] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [descriptions, setDescriptions] = useState([{ text: '', photo: 'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/Трубы%2F320e77b5-3723-476e-b244-2c1ded9ee356.jpeg?alt=media&token=7845ede3-171c-42d6-ad31-b8b8b0ea3a70' }])
    const [mainImg, setMainImg] = useState('')
    const [additionalImgs, setAdditionalImgs] = useState([])
    const [openImg, setOpenImg] = useState(false)
    const [props, setProps] = useState([{ text: '', icon: '' }])

    //Open image modal
    const imgOpenHandler = (main?: boolean) => {
        setIsMain(main ? true : false)
        setOpenImg(true)
    }

    const createHandler = async () => {
        await createProduct(name, shortDescription, descriptions, mainImg, additionalImgs, props)
            .then(() =>
                setTimeout(() => {
                    router.refresh()
                }, 1000)
            )
    }

    const changeHandler = async () => {
        await changeProduct(product.id, name, shortDescription, descriptions, mainImg, additionalImgs, props)
            .then(() =>
                setTimeout(() => {
                    router.refresh()
                }, 1000)
            )
    }

    if (change) {
        useEffect(() => {
            setName(product.name)
            setShortDescription(product.shortDescription)
            setDescriptions(product.descriptions || [{ text: '', photo: '' }])
            setMainImg(product.mainImg)
            setAdditionalImgs(product.additionalImgs || [])
            setProps(product.props || [{ text: '', icon: '' }])
        }, [open])
    }
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={style}>
                <ChooseImg
                    folders={folders}
                    openImg={openImg}
                    setOpenImg={setOpenImg}
                    img={isMain ? mainImg : additionalImgs}
                    setImg={isMain ? setMainImg : setAdditionalImgs}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <Typography variant='h5'>
                        {change ? 'Изменение' : 'Создание'} продукта
                    </Typography>
                    <Field
                        label='Наименование'
                        state={name}
                        setState={setName}
                    />
                    <Divider />
                    <IconInputList
                        title='Характеристики'
                        setState={setProps}
                        state={props} />
                    <Divider />
                    <Field
                        label='Краткое описание'
                        state={shortDescription}
                        setState={setShortDescription}
                    />
                    <Divider />
                    <PhotoInputList
                        title='Описания'
                        setState={setDescriptions}
                        state={descriptions}
                    />
                    <Divider />
                    <Typography variant='h5'>
                        {change ? 'Изменение' : 'Создание'} продукта
                    </Typography>
                    <Box>
                        <Box className='r-gap1'>
                            <Button color='black' variant='outlined' onClick={() => imgOpenHandler(true)}>
                                {mainImg ? 'Изменить' : 'Выбрать'} главную картинку
                            </Button>
                            {mainImg ?
                                <Button color='error' onClick={() => setMainImg('')}>
                                    Очистить
                                </Button>
                                : null
                            }
                        </Box>
                        {mainImg ?
                            <Link href={mainImg} target='_blank'>
                                <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                                    Главная картинка - {mainImg}
                                </Typography>
                            </Link>
                            : null}
                    </Box>
                    <Box>
                        <Button color='black' variant='outlined' onClick={() => imgOpenHandler(false)}>
                            {additionalImg.length ? 'Изменить' : 'Выбрать'} доп картинки
                        </Button>
                        {additionalImg.length ?
                            <Button color='error' onClick={() => setAdditionalImg([])}>
                                Очистить
                            </Button>
                            : null
                        }
                        {additionalImg.length ? additionalImg.map((i, key) => (
                            <Link href={i} target='_blank' key={key}>
                                <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                                    Доп картинкa {key} - {i}
                                </Typography>
                            </Link>
                        )) : null}
                    </Box>
                    <Button onClick={change ? changeHandler : createHandler} color='secondary' variant='contained' sx={{ width: 'max-content' }}>
                        {change ? 'Изменить' : 'Создать'}
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default MyModal