import React from "react"
import { Box } from "@mui/material"
import Image from 'next/image'

const Sticker = ({ small }: { small?: boolean }) => (
    <Box sx={{ position: 'absolute', top: small ? -15 : -20, left: 20, width: small ? 40 : 50, height: small ? 40 : 50 }}>
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
                sizes="(max-width: 768px) 2vw, (max-width: 1200px) 5vw, 3vw"
                src='/icons/bookmark.svg'
                fill
                alt='Bookmark'
            />
        </Box>
    </Box>
)

export default Sticker