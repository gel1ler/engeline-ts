import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Subtitle from '@/components/UI/text/Subtitle'
import Fill from '@/components/UI/Fill'
import MoreButton from '@/components/UI/buttons/MoreButton'

const arr = [
    {
        name: 'Аттестованная лаборатория',
        text: 'Наши специалисты осуществляют комплексные испытания материалов и изделий, чтобы гарантировать их соответствие стандартам и требованиям качества.',
        image: '/advantages/lab.webp',
        href: '/prod#lab_anchor'
    },
    {
        name: 'Антикоррозийное покрытие',
        text: 'Все виды изделий могут проходить антикоррозийную обработку методом безвоздушной окраски в покрасочной камере, в том числе изоляцией типа «Карбофлекс».',
        image: '/advantages/antikor.jpg',
        href: '/prod#ac_anchor'
    },
    {
        name: 'Заготовительное произодство',
        text: 'Технологические возможности заготовительного производства позволяют нам самостоятельно выполнять все этапы производства, гарантируя высокий уровень контроля и эффективность процесса.',
        image: '/advantages/plazma.jpg',
        href: '/prod#ac_anchor'
    },
    {
        name: 'Разработка документаций',
        text: 'Технологические возможности заготовительного производства позволяют нам самостоятельно выполнять все этапы производства, гарантируя высокий уровень контроля и эффективность процесса.',
        image: '/advantages/docs.jpeg',
        href: '/prod#ac_anchor'
    },
]

export default function AnotherAdavantages() {
    return (
        <Box
            className='grid gap-10 pt-4 px-4 justify-items-center mx-auto'
            sx={{
                gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr'],
                maxWidth: ['450px','450px','450px','1100px',],
            }}
        >
            {arr.map((i, key) =>
                <Box
                    key={key}
                    className='flex flex-col items-end rounded-lg overflow-hidden'
                    data-aos='fade-up'
                    sx={{
                        boxShadow: '0 0 10px 5px rgba(0,0,0,.2)'
                    }}
                >
                    <Image
                        alt='Лаборатория завода'
                        height={9*30}
                        width={16*30}
                        style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', flexGrow: 1 }}
                        src={i.image}
                    />
                    <Box className=' bg-white p-4 overflow-hidden flex flex-col items-center gap-2' sx={{ boxShadow: '0 0 10px 5px rgba(0,0,0,.1)' }}>
                        <Subtitle centered noAos>
                            {i.name}
                        </Subtitle>
                        <Typography variant='subtitle1' textAlign='center'>
                            {i.text}
                        </Typography>
                        <MoreButton href={i.href} sx={{ px: 2, py: 1, mt: 'auto' }} />
                    </Box>
                </Box>
            )}
        </Box>
    )
}
