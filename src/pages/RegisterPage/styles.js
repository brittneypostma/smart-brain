import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  height: 100vh;
  display: grid;
  justify-content: center;
`

// export const Content = styled.div`
//   display: grid;
//   grid-template-rows: 100px 1fr;
//   height: 100%;
// `

// export const Main = styled.div`
//   display: grid;
//   align-self: flex-start;
//   align-items: center;
//   align-content: center;
// `

export const RegisterForm = styled.form``

export const Field = styled.fieldset`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`

export const Input = styled.input`
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid white;
  padding: 10px;
  font-size: 1.5vh;
`

export const SubmitButton = styled.button`
  background-color: white;
  color: rgb(65, 86, 107);
  border-radius: 2px;
  padding: 10px;
  outline: none;
  border: 1px solid white;
  font-size: 2vh;
  transition: box-shadow 0.1s linear;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    box-shadow: none;
  }

  &:active {
    background-color: #eee;
  }
`
