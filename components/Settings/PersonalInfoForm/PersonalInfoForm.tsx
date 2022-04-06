import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Container, StyledButton, StyledInput, Title, ValidationError } from './style';

type InputsType = {
  email: string;
  userName: string;
};

const PersonalInfoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    console.log(data);
    // reset();
  };
  return (
    <Container>
      <Title>Personal Info</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidationError>{errors.email && errors.email.message}</ValidationError>
        <StyledInput
          placeholder="Email"
          type="email"
          {...register('email', {
            required: 'field cannot be empty',
          })}
        />
        <ValidationError>{errors.userName && errors.userName.message}</ValidationError>
        <StyledInput
          placeholder="Username"
          {...register('userName', {
            required: 'field cannot be empty',
            minLength: {
              value: 3,
              message: 'userName cannot be shorter than 3 characters ',
            },
          })}
        />

        <StyledButton>Save</StyledButton>
      </form>
    </Container>
  );
};

export default PersonalInfoForm;
