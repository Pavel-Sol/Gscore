import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledButton, StyledInput, ValidationError, Container, Title } from './style';

type InputsType = {
  email: string;
  username: string;
  password: string;
};

const CreateLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <Title>Create account</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidationError>{errors.username && errors.username.message}</ValidationError>
        <StyledInput
          placeholder="Username"
          {...register('username', {
            required: 'field cannot be empty',
          })}
        />

        <ValidationError>{errors.email && errors.email.message}</ValidationError>
        <StyledInput
          placeholder="Email"
          type="email"
          {...register('email', {
            required: 'field cannot be empty',
          })}
        />
        <ValidationError>{errors.password && errors.password.message}</ValidationError>
        <StyledInput
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'field cannot be empty',
            minLength: {
              value: 3,
              message: 'password cannot be shorter than 3 characters ',
            },
          })}
        />

        <StyledButton>Send password</StyledButton>
      </form>
    </Container>
  );
};

export default CreateLogin;
