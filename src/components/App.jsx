import React, { useState } from 'react'
import Navigation from './Navigation'
import ImageLinkForm from './ImageLinkForm'
import FaceRecognition from './FaceRecognition'
import Rank from './Rank'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import { useSelector, useDispatch } from 'react-redux'
import {
  Container,
  Content,
  Main,
  particleStyles,
  particleParams
} from '../styles/App.styles'

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
})

function App() {
  return (
    <Container>
      <Particles
        style={particleStyles}
        params={particleParams}
        height='100vh'
      />
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

export default App
