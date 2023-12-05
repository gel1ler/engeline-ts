import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Subtitle from '@/components/UI/text/Subtitle'
import Fill from '@/components/UI/Fill'
import MoreButton from '@/components/UI/buttons/MoreButton'

const arr = [
    {
        name: 'Собственная лаборатория',
        text: 'Наши специалисты осуществляют комплексные испытания материалов и изделий, чтобы гарантировать их соответствие стандартам и требованиям качества.',
        image: '/advantages/lab.webp'
    },
    {
        name: 'Антикоррозийное покрытие',
        text: 'Все виды изделий могут проходить антикоррозийную обработку методом безвоздушной окраски в покрасочной камере, в том числе изоляцией типа «Карбофлекс».',
        image: '/advantages/antikor.jpg'
    },
    {
        name: 'Контроль качества',
        text: 'Производство емкостного оборудования рассчитанного на высокое давление предъявляет требования к методам контроля сварных соединений и изоляции.',
        image: '/advantages/control.jpg'
    },
    {
        name: 'Заготовительное произодство',
        text: 'Технологические возможности заготовительного производства позволяют нам самостоятельно выполнять все этапы производства, гарантируя высокий уровень контроля и эффективность процесса.',
        image: '/advantages/plazma.jpg'
    },
    {
        name: 'Разработка документаций',
        text: 'Технологические возможности заготовительного производства позволяют нам самостоятельно выполнять все этапы производства, гарантируя высокий уровень контроля и эффективность процесса.',
        image: '/advantages/docs.jpeg'
    },
    {
        name: 'Наличие сертификатов',
        text: 'Технологические возможности заготовительного производства позволяют нам самостоятельно выполнять все этапы производства, гарантируя высокий уровень контроля и эффективность процесса.',
        image: '/advantages/sertificate.jpg'
    }
]

export default function AnotherAdavantages() {
    return (
        <Box
            className='grid gap-10 pt-4'
            sx={{
                gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr']
            }}
        >
            {arr.map((i, key) =>
                <Box
                    key={key}
                    className='flex flex-col items-end rounded-lg overflow-hidden'
                    data-aos='fade-up'
                    sx={{
                        // minWidth: '500px',
                        boxShadow: '0 0 10px 5px rgba(0,0,0,.2)'
                    }}
                >
                    <Image
                        alt='Лаборатория завода'
                        height={300}
                        width={400}
                        style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', flexGrow: 1 }}
                        src={i.image}
                    />
                    <Box className=' bg-white p-4 overflow-hidden flex flex-col items-center gap-2' sx={{ boxShadow: '0 0 10px 5px rgba(0,0,0,.1)' }}>
                        <Subtitle centered>
                            {i.name}
                        </Subtitle>
                        <Typography data-aos='fade-up' variant='subtitle1' textAlign='center'>
                            {i.text}
                        </Typography>
                        <MoreButton dataAos='fade-up' href='/' sx={{ px: 2, py: 1, mt: 'auto' }} />
                    </Box>
                    <Fill anchor='to top' type='to anchor' color='rgba(0,0,0,.2)' />
                </Box>
            )}
        </Box>
    )
}
