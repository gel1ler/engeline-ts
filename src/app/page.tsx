import About from '@/page-components/index/about/About'
import { Box } from '@mui/material'
import Start from '@/page-components/index/start/Start'
import Plx from '@/services/Plx'
import Products from '@/page-components/index/products/Products'
import Fabric from '@/page-components/index/about/Fabric'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/layout/contacts/Contacts'
import AnotherAdavantages from '@/page-components/index/about/AnotherAdvantages';
import AOSProvider from '@/services/AOSProvider'
import Gallery from '@/components/UI/gallery/Gallery'
import { Metadata } from 'next'
import GetCall from '@/components/UI/forms/getCall/GetCall'
import { startParallax } from '@/customization/customization'

export const metadata: Metadata = {
  title: 'ООО "ИНЖЕЛАЙН"',
  description: `ООО "ИНЖЕЛАЙН" - производственное предприятие в Тамбовской области. 
    Мех обработка, ёмкостное химическое и машинное оборудование, муфты ремонтные стальные,
    соединительные детали трубопроводов, трубы обечаечные, корпуса, бандажи, трубы восстановленные.`,
}

export default function Home() {
  return (
    <AOSProvider>
      <Box className='relative w-screen'>
        <GetCall />
        <Plx parallaxData={startParallax}>
          <Start />
        </Plx>
        <Box id='about_anchor' sx={{ pt: '70px', mt: '-70px' }}>
          <About />
        </Box>
        <Fabric />
        <Box id='products_anchor' sx={{ pt: '140px', mt: '-140px' }}>
          <Products />
        </Box>
        <Box className='mx-auto anchor' sx={{ my: 10 }}>
          <Title centered variant='h3'>
            Другие преимущества
          </Title>
          <AnotherAdavantages />
        </Box>
        <Box sx={{ pt: 10 }}>
          <Title centered variant='h3'>
            Галерея
          </Title>
          <Gallery
            type='wide'
            images={['/1.jpg', '/gen2.jpg', '/advantages/plazma.jpg', '/general.jpg', '/advantages/antikor.jpg']}
          />
          <Contacts />
        </Box >
      </Box >
    </AOSProvider>
  )
}
