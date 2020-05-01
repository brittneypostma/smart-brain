import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  justify-content: center;
`

const Form = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  background:
  radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px,
  radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px,
  linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0,
  linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
  linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0,
  linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1;
  background-size:40px 60px;
`

const Input = styled.input`
  height: 35px;
  width: 100%;
`

const Button = styled.button`
  padding: 8px;
  outline: none;
  margin-left: 10px;
  border: none;
  color: white;
  font-weight: bold;
  background-color: #BB7711;
`

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <Container>
      <Form>
        <Input type="text" onChange={onInputChange} />
        <Button onClick={onButtonSubmit}>Detect</Button>
      </Form>
    </Container>
  )
}

export default ImageLinkForm