import React, { useState, useEffect } from 'react'
import { Container, Img, Box } from './styles'
import { useSelector } from 'react-redux'

const FaceRecognition = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [img, setImg] = useState(null)
  const boundingBoxes = useSelector(state => state.image.boxes)
  const url = useSelector(state => state.image.imageUrl)
  const imageLoaded = useSelector(state => state.image.isLoaded)

  useEffect(() => {
    setImg(document.getElementById('inputImage'))
    if (img) {
      const compStyles = window.getComputedStyle(img)
      setHeight(Number(compStyles.height.replace('px', '')))
      setWidth(Number(img.width))
    }
  }, [imageLoaded, img])

  return (
    <Container>
      {url ? <Img id='inputImage' src={url} alt='image' /> : null}
      {boundingBoxes.map(boundingBox => (
        <Box
          key={boundingBox.top}
          top={boundingBox.top * height}
          right={width - boundingBox.right * width}
          bottom={Math.abs(height - boundingBox.bottom * height)}
          left={boundingBox.left * width}
        />
      ))}
    </Container>
  )
}

export default FaceRecognition
