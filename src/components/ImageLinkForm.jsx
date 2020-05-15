import React, { useState } from 'react'
import { Container, Form, Input, Button } from '../styles/ImageLinkForm.styles'
import { useDispatch } from 'react-redux'
import { sendImage, setImageUrl } from '../redux/imageSlice'

const ImageLinkForm = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleDetect = () => {
    dispatch(setImageUrl(input))
    dispatch(sendImage(input))
  }


  return (
    <Container>
      <Form>
        <Input type='text' onChange={e => setInput(e.target.value)} />
        <Button onClick={handleDetect}>Detect</Button>
      </Form>
    </Container>
  )
}

export default ImageLinkForm
