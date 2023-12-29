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
        <Toolbar
          className={'flex w-full' + isFullwidth}
          sx={{
            justifyContent: start ? ['flex-end', 'flex-end', 'center'] : 'space-between',
            my: 'auto',
            px: [2, 4, 4, 4]
          }}
        >
          {!start ?
            <Link href='/'>
              <Image
                alt='Logo'
                src={mainInfo.logoHorizontal}
                width={300}
                height={43}
                style={{ maxWidth: '70vw', maxHeight: '40px' }}
              />
            </Link>
            : null
          }
          <Box className='flex'>
            <Box sx={{ display: ['none', 'none', 'flex'], gap: 5 }}>
              <Box sx={{ display: ['none', 'none', 'none', 'flex'] }}>
                <NavLinks />
              </Box>
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