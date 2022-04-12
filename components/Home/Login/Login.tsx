import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { loginUserAction, setActiveStep, RootState } from 'store';
import { Error, Loader } from 'components';
import {
  StyledButton,
  StyledInput,
  ValidationError,
  Container,
  Title,
  GoBack,
  PrevStep,
} from './style';

type InputsType = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.userLoading);
  const loginError = useSelector((state: RootState) => state.user.userError);

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

  const handleClick = () => {
    dispatch(setActiveStep(1));
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Title>Log in</Title>
      {loginError && <Error error={loginError} />}
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
        <GoBack>
          <PrevStep onClick={handleClick}>Go back to registration</PrevStep>
        </GoBack>
      </form>
    </Container>
  );
};

export default Login;
