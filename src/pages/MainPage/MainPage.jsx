import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition'
import Rank from '../../components/Rank/Rank'
import { Container, Content, Main } from './styles.js'

const MainPage = () => {
  return (
    <Container>
      <Content>
        <Navigation />
        <Main>
          <Rank />
          <ImageLinkForm />
          <FaceRecognition />
        </Main>
      </Content>
    </Container>
  )
}

export default MainPage
