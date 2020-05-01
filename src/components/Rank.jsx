import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: white;
  font-size: 24px;
  display: grid;
  font-family: "Courier New", Courier, monospace;
`

const Black = styled.p`
  color: black;
  font-size: 20px;
  margin-bottom: 8px;
`


const Rank = () => {
  return (
    <Container>
      {'Andrei, your current rank is...'}
      <p>{5}</p>
      <Black>{'This Magic Brain will detect faces in your picture. Give it a try.'}</Black>
    </Container>
  )
}

export default Rank