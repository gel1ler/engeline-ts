import { ThemeOptions } from '@mui/material/styles'
import { inter } from './ThemeRegistry'
import { colors, headerProps } from '../customization'

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary
    },
    additional: {
      main: colors.additional
    },
    helper: {
      main: colors.helper
    },
    background: {
      default: colors.bg
    },
  },
  typography: {
    fontFamily: "Inter",
    fontWeightRegular: '500',
    fontSize: 13
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '112px',
          boxShadow: headerProps.withShadow ? '0px 1px 10px rgba(0,0,0,.3)' : 'none',
        }
      }
    }
  }
}
