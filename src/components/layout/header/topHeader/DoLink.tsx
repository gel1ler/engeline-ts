import React from 'react'
import { Typography, } from '@mui/material'
import { useSnackbar } from 'notistack'
import { mainInfo } from '@/content/content'
import Link from 'next/link'
import Phone from '@/services/phone'

export default function DoLink({ type, bold }: { type: 'email' | 'phone' | 'location', bold?: boolean }) {
    return (
        <Phone bold />
    )
}
