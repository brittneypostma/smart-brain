/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Tilt from 'react-tilt'

import brain from './brain.png'

const Logo = () => {
  return (
    <div style={{ width: "100%" }}>
      <Tilt options={{ max: 25 }} >
        <div>
          <img style={{ width: "15%", overflow: "auto" }} src={brain} alt="brain"></img>
        </div>
      </Tilt>
    </div>
  )
}


export default Logo