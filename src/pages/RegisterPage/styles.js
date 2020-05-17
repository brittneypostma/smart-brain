import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  height: 100vh;
  display: grid;
  justify-content: center;
`

export const Field = styled.fieldset`
  padding: 25px;
  text-align: center;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.large};
  color: ${props => props.theme.colors.darkest};
  border: 2px dotted ${props => props.theme.colors.blue};
`

export const Label = styled.label`
  text-align: left;
  color: ${props => props.theme.colors.lightBlue};
  font-size: ${props => props.theme.fontSize.small};
`

export const Legend = styled.legend`
  font-size: ${props => props.theme.fontSize.extraLarge};
`
export const FormContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`

export const Input = styled.input`
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.colors.darkest};
  padding: 10px;
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.fontSize.lightBlue};
  outline: 1px solid ${props => props.theme.colors.darkGray};

  &:focus {
    border: 1px solid ${props => props.theme.colors.blue};
  }
`

export const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.darkest};
  border-radius: 2px;
  padding: 10px;
  outline: none;
  font-size: ${props => props.theme.fontSize.medium};
  box-shadow: 2px 4px 10px rgba(65, 86, 107, 0.7),
    -2px 4px 10px rgba(65, 86, 107, 0.7);
  transition: all 0.4s ease-in-out;
  border: 1px solid ${props => props.theme.colors.blue};

  &:hover {
    box-shadow: none;
  }

  &:active {
    border: 1px solid ${props => props.theme.colors.teal};
    background-color: ${props => props.theme.colors.teal};
  }
`
