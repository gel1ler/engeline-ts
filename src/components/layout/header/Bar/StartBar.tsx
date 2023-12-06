import { headerProps } from '@/customization/customization'
import { Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import { PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'
import MyDrawer from '../drawer/MyDrawer'
import TopHeader from '../topHeader/TopHeader'
import Link from 'next/link'
import NavLinks from './NavLinks'
import { mainInfo } from '@/content/content'
import { AppRegistration, Person } from '@mui/icons-material'

const StartBar = ({ noBg, onlyTop }: { noBg?: boolean, onlyTop?: boolean }) => {
  const isFullwidth: string = headerProps.fullwidth ? '' : ' max-w-7xl mx-auto'

  return (
    <>
      {headerProps.topHeader ? <TopHeader noBg={noBg} /> : null}
      {
        !onlyTop
        &&
        <Toolbar className={'flex w-full' + isFullwidth} sx={{ justifyContent: 'space-between', my: 'auto' }}>
          <Link href='/'>
            <Image
              alt='Logo'
              src={mainInfo.logoHorizontal}
              width={200}
              height={40}
            />
          </Link>
          <Box className='flex gap-10'>
            <NavLinks />
            <Image
              src='/icons/login.svg'
              alt='Иконка входа'
              width={40}
              height={40}
            />
          </Box>
          <MyDrawer />
        </Toolbar>
      }
    </>
  )
}

export default StartBar