import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Title from '@/components/UI/text/Title'
import DropDown from './DropDown'

const Contacts = () => {
  return (
    <Box id='contacts_anchor' sx={{ pt: '30px', mt: '-30px' }}>
      <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw', mt: 10, py: 5, minHeight: '100vh' }} maxWidth={false}>
        <Title>
          Контакты
        </Title>
        <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], gap: 5, minHeight: '70vh' }} >
          <Box sx={{ textAlign: ['center', 'center', 'left'] }} className='flex flex-col gap-2' data-aos='fade-up'>

            <Typography variant="h4" fontWeight='bold'>
              Офис
            </Typography>
            <Typography variant="h6">
              <b>Телефон:</b> +7(495)374-53-43
            </Typography>
            <Typography variant="h6">
              <b>Адрес:</b> Московская обл., Раменское, ул. Северное шоссе 10
            </Typography>
            <Typography variant="h6">
              <b>Эл. почта:</b> info@engeline.ru
            </Typography>
            <Typography variant="h6">
              <b>Директор:</b> Абаничев Игорь Николаевич
            </Typography>
            <DropDown
              name='Секретарь'
              list={['Глазунова Мария Олеговна - secretary@engeline.ru']}
            />
            <DropDown
              name='Коммерческий отдел'
              list={[
                'Шоттер Антон Антонович - komm2@engeline.ru',
                'Абаничева Юлия Юрьевна - komm1@engeline.ru',
                'Овсянников Алексей Олегович - komm3@engeline.ru'
              ]}
            />

            <Typography variant="h4" fontWeight='bold' sx={{ mt: 4 }}>
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
            <DropDown
              name='Исполнительный директор'
              list={['Каширский Валерий Александрович - exec.dir@engeline.ru']}
            />
            <DropDown
              name='Зам. директора по производству'
              list={['Нижегородов Олег Владимирович - h.product@engeline.ru']}
            />
            <DropDown
              name='Главный инженер'
              list={['Дегтярев Александр Васильевич - gl.engineer@engeline.ru']}
            />
            <DropDown
              name='Главный сварщик/технолог'
              list={['Пугач Александр Леонидович - ch.welder@engeline.ru']}
            />
          </Box>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&amp;source=constructor"
            className='w-full'
            style={{ boxShadow: '0px 5px 20px 1px rgba(34, 60, 80, 0.2)', minHeight: '50vh' }}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Contacts