import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Container, StyledButton, StyledInput, Title, ValidationError } from './style';

type InputsType = {
  currentPassword: string;
  newPassword: string;
};

const ChangePassForm = () => {
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
      <Title>Change password</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidationError>
          {errors.currentPassword && errors.currentPassword.message}
        </ValidationError>
        <StyledInput
          placeholder="Current Password"
          type="password"
          {...register('currentPassword', {
            required: 'field cannot be empty',
            minLength: {
              value: 3,
              message: 'password cannot be shorter than 3 characters ',
            },
          })}
        />
        <ValidationError>{errors.newPassword && errors.newPassword.message}</ValidationError>
        <StyledInput
          placeholder="New Password"
          type="password"
          {...register('newPassword', {
            required: 'field cannot be empty',
            minLength: {
              value: 3,
              message: 'password cannot be shorter than 3 characters ',
            },
          })}
        />

        <StyledButton>Save</StyledButton>
      </form>
    </Container>
  );
};

export default ChangePassForm;
