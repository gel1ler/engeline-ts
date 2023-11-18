import IB from "./IB"
import { Menu } from '@mui/icons-material'
import React from 'react'
import arrowLeft from '@/../public/icons/arrow-left.svg'
import arrowRight from '@/../public/icons/arrow-right.svg'
import Image from 'next/image'
import { Box } from "@mui/material"

const style = { fontSize: 30 }

export const MenuIcon = ({ setOpen }: { setOpen: () => void }) => { return (<IB f={setOpen}><Menu sx={style} /></IB>) }

export const Arrow = ({ anchor, f }: { anchor: 'left' | 'right', f: () => void }) => {
    return (
        <Box
            // data-aos='fade-up'
            className='absolute top-0 cursor-pointer h-full z-50'
            sx={{
                transition: 'all .2s ease-out',
                width: '17vw',
                [anchor]: 0,
                ":hover": {
                    [anchor]: -5,
                }
            }}
            onClick={f}
        >
            <Image
                className="absolute top-1/2 -translate-y-1/2 h-1/5 w-1/5"
                id='arrow'
                style={{
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    filter: 'drop-shadow(0 0 8px rgba(0,0,0, 0.8))',
                }}
                alt='Стрелка'
                src={anchor === 'left' ? arrowLeft : arrowRight}
            />
        </Box>
    )
}

export default Arrow