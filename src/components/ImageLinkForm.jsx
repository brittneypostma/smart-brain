import React from 'react'
import { Container, Form, Input, Button } from '../styles/ImageLinkForm.styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../redux/imageSlice'
const ImageLinkForm = () => {
  const dispatch = useDispatch()

  const handleDetect = e => {
    dispatch(fetchApi(e.target.value))
  }

  return (
    <Container>
      <Form>
        <Input type='text' />
        <Button onClick={handleDetect}>Detect</Button>
      </Form>
    </Container>
  )
}

export default ImageLinkForm
