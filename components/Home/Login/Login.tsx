import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../../store/actions';

import { StyledButton, StyledInput, ValidationError, Container, Title } from './style';

type InputsType = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    dispatch(loginUserAction(data));
    reset();
  };

  return (
    <Container>
      <Title>Log in</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <StyledButton>Log in</StyledButton>
      </form>
    </Container>
  );
};

export default Login;
