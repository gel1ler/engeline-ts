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
import Login from '@/components/UI/buttons/Login'

const Bar = ({ noBg, onlyTop, start }: { noBg?: boolean, onlyTop?: boolean, start?: boolean }) => {
  const isFullwidth: string = headerProps.fullwidth ? '' : ' max-w-7xl mx-auto'

  return (
    <>
      {headerProps.topHeader ? <TopHeader noBg={noBg} /> : null}
      {
        !onlyTop
        &&
        <Toolbar className={'flex w-full' + isFullwidth} sx={{ justifyContent: start ? 'center' : 'space-between', my: 'auto' }}>
          {!start ?
            <Link href='/'>
              <Image
                alt='Logo'
                src={mainInfo.logoHorizontal}
                width={200}
                height={40}
              />
            </Link>
            : null
          }
          <Box className='flex gap-10'>
            <Box className='gap-10' sx={{ display: ['none', 'none', 'flex'] }}>
              <NavLinks />
              <Login />
            </Box>
            <MyDrawer />
          </Box>
        </Toolbar>
      }
    </>
  )
}

export default Bar