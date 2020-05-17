import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Container,
  Field,
  Legend,
  FormContainer,
  Input,
  SubmitButton,
  Label
} from './styles.js'
import { Card } from '../PageStyles'

const RegisterPage = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Legend>Register</Legend>
            <FormContainer>
              <Label>Name:</Label>
              <Input
                style={{ color: '#D7F6F6' }}
                name='name'
                type='text'
                defaultValue='test'
                ref={register}
              />

              <Label>Email:</Label>
              <Input
                style={{ color: '#D7F6F6' }}
                name='email'
                type='email'
                ref={register({ required: true })}
              />

              <Label>Password:</Label>
              <Input
                style={{ color: '#D7F6F6' }}
                name='password'
                type='password'
                ref={register({ required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}

              <SubmitButton type='submit'>Submit</SubmitButton>
            </FormContainer>
          </Field>
        </form>
      </Card>
    </Container>
  )
}

export default RegisterPage
