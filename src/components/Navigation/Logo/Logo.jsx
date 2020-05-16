import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.svg'
import { Container, Img } from './styles'
const Logo = () => {
  return (
    <Container>
      <Tilt options={{ max: 100 }}>
        <Img src={brain} alt='brain'></Img>
      </Tilt>
    </Container>
  )
}

export default Logo
