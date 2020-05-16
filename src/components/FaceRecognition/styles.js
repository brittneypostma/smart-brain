import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
`

export const Content = styled.div`
  position: absolute;
`

export const Img = styled.img`
  box-sizing: border-box;
  width: 500px;
  height: auto;
  overflow: auto;
`

export const Box = styled.div`
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  bottom: ${props => props.bottom}px;
  left: ${props => props.left}px;
  position: absolute;
  box-shadow: 0 0 0 3px #829eba inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`
