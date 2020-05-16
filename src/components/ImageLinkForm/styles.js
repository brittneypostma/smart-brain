import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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
  border-radius: 2px;
  box-shadow: inset 0 0 5px 2px rgba(7, 7, 7, 0.3);
  background: #fff;
`

export const Button = styled.button`
  padding: 8px;
  outline: none;
  margin-left: 10px;
  border: none;
  font-weight: bold;
  color: white;
  border-radius: 2px;
  background-color: rgb(65, 86, 107);
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    position: relative;
    top: 1px;
  }
`
