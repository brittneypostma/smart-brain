import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import ImageLinkForm from './components/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'
import Rank from './components/Rank'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import Clarifai from 'clarifai';
import { useSelector, useDispatch } from 'react-redux'

import './App.css'

const apps = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
});

const Container = styled.div`
  text-align: center;
  height: 100vh;
`

const Content = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  height: 100vh; 
  width: 100%; 
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr 1fr;
`

const Main = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`

const particleStyles = {
  display: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: -1,
  maxHeight: "92vh"
}

const particleParams = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

function App() {
  const section = useSelector(state => state.sectionSlice)

  const [input, setInput] = useState('')
  const [user, setUser] = useState('')
  console.log(section)
  const onInputChange = e => {
    setInput(e.target.value)
  }

  const onSubmit = e => {
    setInput({ imageUrl: input })
    apps.models.predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(res => {
        if (res) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user
            })
          })
        }
      })
  }

  return (
    <Container>
      <Navigation />
      <Particles
        style={particleStyles}
        params={particleParams}
        height="100vh"
      />
      <Content>
        <Logo />
        <Main>
          <Rank />
          <ImageLinkForm onChange={onInputChange} onButtonSubmit={onSubmit} />
          <FaceRecognition />
        </Main>
      </Content>
    </Container>
  );
}

export default App