/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Tilt from 'react-tilt'
import { Img } from '../styles/Logo.styles'
import brain from '../styles/assets/brain.svg'

const Logo = () => {
  return (
    <Tilt options={{ max: 55 }}>
      <Img src={brain} alt='brain'></Img>
    </Tilt>
  )
}

export default Logo
