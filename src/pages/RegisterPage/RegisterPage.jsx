import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Container,
  Content,
  Main,
  Field,
  Input,
  SubmitButton
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
            <legend>Register</legend>
            <Input name='name' type='text' defaultValue='test' ref={register} />
            <Input
              name='email'
              type='email'
              ref={register({ required: true })}
            />
            <Input
              name='password'
              type='password'
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <SubmitButton type='submit'>Button</SubmitButton>
          </Field>
        </form>
      </Card>
    </Container>
  )
}

export default RegisterPage
