import React, { useState, useEffect } from 'react'
import { Container, Content, Img, Box } from './styles'
import { useSelector } from 'react-redux'

const FaceRecognition = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [img, setImg] = useState(null)
  const [coords, setCoords] = useState({})

  const imgCoords = useSelector(state => state.image.box)
  const url = useSelector(state => state.image.imageUrl)

  useEffect(() => {
    setImg(document.querySelector('.inputImage'))
  }, [imgCoords])

  const doTheMath = (width, height) => {
    return {
      top: imgCoords.top * height,
      right: width - imgCoords.right * width,
      bottom: height - imgCoords.bottom * height,
      left: imgCoords.left * width
    }
  }

  useEffect(() => {
    setHeight(0)
    setWidth(0)
    if (img) {
      setHeight(Number(img.height))
      setWidth(Number(img.width))
    }
    setCoords(doTheMath(width, height))
  }, [img, width, height])

  console.log(width, height)

  return (
    <Container>
      <Content>
        {imgCoords.top === 0 ? null : (
          <>
            <Img className='inputImage' src={url} alt='image' />
            <Box
              top={coords.top}
              right={coords.right}
              bottom={coords.bottom}
              left={coords.left}
            />
          </>
        )}
      </Content>
    </Container>
  )
}

export default FaceRecognition
