import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  justify-content: center;
`

export const Form = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(
      #1d1d1d 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      transparent 50%,
      transparent 75%,
      #242424 75%,
      #242424
    );
  background-color: #131313;
  background-size: 20px 20px;
`

export const Input = styled.input`
  height: 35px;
  width: 100%;
`

export const Button = styled.button`
  padding: 8px;
  outline: none;
  margin-left: 10px;
  border: none;
  color: white;
  font-weight: bold;
  background-color: #3eb0df;
`
