/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Tilt from 'react-tilt'
import styled from 'styled-components'

import brain from './brain.png'

const Container = styled.div`
  width: 100%;
`

const Img = styled.img`
  width: 15%;
  overflow: auto;
  margin: 20px;
`

const Logo = () => {
  return (
    <Container>
      <Tilt options={{ max: 25 }} >
        <Img src={brain} alt="brain"></Img>
      </Tilt>
    </Container>
  )
}


export default Logo