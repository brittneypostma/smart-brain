import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    darkest: '#272F38',
    gray: 'rgba(65, 86, 107)',
    lightGray: '#EAECF1',
    darkGray: 'rgb(62, 83, 104)',
    lightBlue: '#D7F6F6',
    blue: '#AFEEEE',
    teal: '#46CAC6'
  },
  fontSize: {
    small: '1.8vh',
    medium: '2vh',
    large: '2.2vh',
    extraLarge: '3vh'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
