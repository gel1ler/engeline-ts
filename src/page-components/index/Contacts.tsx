import React from 'react'
import { Box, Typography } from '@mui/material'
import Title from '@/components/UI/text/Title'


const Contacts = () => {
  return (
    <Box sx={{ mt: 10, py: 5, minHeight: '100vh' }}>
      <Title>
        Контакты
      </Title>
      <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gap: 5, minHeight: '70vh' }} >
        <Box sx={{ textAlign: ['center', 'center', 'left'] }} className='flex flex-col gap-2' data-aos='fade-up'>
          <Typography variant="h4" fontWeight='bold'>
            Производственная площадка
          </Typography>
          <Typography variant="h6">
            <b>Адрес:</b> Тамбовская обл., п. Первомайский, ул. Школьная 9
          </Typography>
          <Typography variant="h6">
            <b>Телефон:</b> +7(495)374-53-43
          </Typography>
          <Typography variant="h6">
            <b>Эл. почта:</b> prod@engeline.ru
          </Typography>

          <Typography variant="h4" fontWeight='bold' sx={{ mt: 4 }}>
            Офис
          </Typography>
          <Typography variant="h6">
            <b>Телефон:</b> 8(989)801-23-91
          </Typography>
          <Typography variant="h6">
            <b>Адрес:</b> Московская обл., Раменское, ул. Северное шоссе 10
          </Typography>
          <Typography variant="h6">
            <b>Эл. почта:</b> info@engeline.ru
          </Typography>
        </Box>
        <iframe
          data-aos='fade-up'
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&amp;source=constructor"
          frameBorder="0"
          style={{ width: '100%', height: '100%', boxShadow: '0px 5px 20px 1px rgba(34, 60, 80, 0.2)', minHeight: '50vh' }}
        />
      </Box>
    </Box>
  )
}

export default Contacts