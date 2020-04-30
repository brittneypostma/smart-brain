import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const Navigation = () => {
  return (
    <Nav>
      <p>Sign Out</p>
    </Nav>
  )
}

export default Navigation