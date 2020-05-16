import React from 'react'
import { Container, Black } from './styles'

const Rank = () => {
  return (
    <Container>
      {'Andrei, your current rank is...'}
      <p>{5}</p>
      <Black>
        {'This Magic Brain will detect faces in your picture. Give it a try.'}
      </Black>
    </Container>
  )
}

export default Rank
