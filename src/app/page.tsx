import About from '@/page-components/index/about/About'
import { Box, Container } from '@mui/material'
import Start from '@/page-components/index/start/Start'
import Plx from '@/services/Plx'
import Products from '@/page-components/index/products/Products'
import Fabric from '@/page-components/index/about/Fabric'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/layout/contacts/Contacts'
import AnotherAdavantages from '@/page-components/index/about/AnotherAdvantages';
import AOSProvider from '@/services/AOSProvider'
import Gallery from '@/components/UI/Gallery'
import Bar from '@/components/layout/header/Bar/Bar'
import { Metadata } from 'next'
import Loader from '@/components/layout/loader'
import GetCall from '@/components/UI/forms/getCall/GetCall'
import { startParallax } from '@/customization/customization'

export const metadata: Metadata = {
  title: 'Инжелайн - производственное предприятие',
  description: 'Инжелайн - производственное предприятие',
}

export default function Home() {
  return (
    <AOSProvider>
      <GetCall />
      <Box className='relative w-screen'>
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
        <Box className='w-2/3 mx-auto anchor' sx={{ my: 10 }}>
          <Title centered>
            Другие преимущества
          </Title>
          <AnotherAdavantages />
        </Box>
        <Gallery images={['/1.jpg', '/advantages/antikor.jpg', '/2.jpg', '/advantages/plazma.jpg', '/general.jpg']} />
        <Contacts />
      </Box >
    </AOSProvider>
  )
}
