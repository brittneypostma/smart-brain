import styled from 'styled-components'



export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
`

export const Content = styled.div`
  position: absolute;
`;


export const Img = styled.img`
  width: 500px;
  height: auto;
`

export const Box = styled.div`
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  bottom: ${props => props.bottom}px;
  left: ${props => props.left}px;
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`
