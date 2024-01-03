import IB from "./IB"
import { Menu } from '@mui/icons-material'
import React from 'react'
import arrowLeft from '@/../public/icons/arrow-left.svg'
import arrowRight from '@/../public/icons/arrow-right.svg'
import Image from 'next/image'
import { Box } from "@mui/material"

const style = { fontSize: 30 }

export const MenuIcon = ({ setOpen }: { setOpen: () => void }) => { return (<IB f={setOpen}><Menu sx={style} /></IB>) }

export const Arrow = (props: { anchor: 'left' | 'right', onClick?: () => void, noBg?: boolean }) => {
    return (
        <Box
            // data-aos='fade-up'
            className='absolute top-0 cursor-pointer h-full z-50'
            sx={{
                background: props.noBg ? '' : `linear-gradient(to ${props.anchor === 'left' ? 'right' : 'left'}, white, transparent)`,
                transition: 'all .2s ease-out',
                width: '17vw',
                [props.anchor]: 0,
                ":hover": {
                    [props.anchor]: -5,
                }
            }}
            >
            <Image
                className="absolute top-1/2 -translate-y-1/2 aspect-square w-20 lg:w-32"
                id='arrow'
                style={{
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    filter: 'drop-shadow(0 0 3px rgba(0,0,0, 0.8))',
                }}
                alt='Стрелка'
                onClick={props.onClick}
                src={props.anchor === 'left' ? arrowLeft : arrowRight}
            />
        </Box>
    )
}

export default Arrow