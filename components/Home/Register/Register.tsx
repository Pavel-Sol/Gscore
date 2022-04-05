import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../../store/actions';
import { setActiveStep } from '../../../store/reducers';

import {
  StyledButton,
  StyledInput,
  ValidationError,
  Container,
  Title,
  Desc,
  ToLogin,
  NextStep,
} from './style';

type InputsType = {
  email: string;
  username: string;
  password: string;
};

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    dispatch(registerUserAction(data));
    reset();
  };

  const handleClick = () => {
    dispatch(setActiveStep(2));
  };

  return (
    <Container>
      <Title>Create account</Title>
      <Desc>
        You need to enter your name and email. We will send you a temporary password by email
      </Desc>
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
        <ToLogin>
          <p>Have an account?</p>
          <NextStep onClick={handleClick}>Go to the next step</NextStep>
        </ToLogin>
      </form>
    </Container>
  );
};

export default Register;
