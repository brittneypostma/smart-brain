import React from 'react'
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import ImageLinkForm from './components/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition'
import Rank from './components/Rank'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import './App.css'

const Container = styled.div`
  text-align: center;
  height: 100%;
`


const Main = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
`

const Content = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  max-height: 92vh; 
  width: 100%;
`

function App() {
  return (
    <Container>
      <Particles
        style={{
          display: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -1,
          maxHeight: "92vh"
        }}
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
              }
            }
          }
        }}
        height="100vh"
      />
      <Content>
        <Navigation />
        <Logo />

        <Main>
          <Rank />
          <ImageLinkForm />
          <FaceRecognition />
        </Main>
      </Content>
    </Container>
  );
}

export default App