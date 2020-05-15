import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  height: 100vh;
`

export const particleStyles = {
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: -1,
  width: '100%',
  height: '100%',
  background: 'center no-repeat cover'
}

export const particleParams = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 5
      }
    }
  }
}

export const Content = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;
  height: 100%;
`

export const Main = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
`
