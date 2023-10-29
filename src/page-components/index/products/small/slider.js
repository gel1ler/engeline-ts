import React, { useState } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import ImageViewer from '@/components/UI/imageViewer'

const Slider = ({ imgs }) => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(0)

    return (
        <Box
            sx={{
                my: 4,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: '100px',
                gap: 1,
            }}
            data-aos='fade-up'
        >
            <ImageViewer
                open={open}
                setOpen={setOpen}
                imgs={imgs}
                current={current}
                setCurrent={setCurrent}
            />
            {imgs.slice(0, 3).map((i, key) =>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%'
                    }}
                    key={key}
                    onClick={() => {
                        setOpen(true)
                        setCurrent(key)
                    }}
                >
                    <Image
                        alt='Миниатюра слайдера'
                        src={i}
                        fill
                        style={{
                            borderRadius: '5px',
                            objectFit: 'cover',
                            filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
                            cursor: 'pointer'
                        }}
                        sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 7vw"
                    />
                </Box>
            )}
        </Box>
    )
}

export default Slider