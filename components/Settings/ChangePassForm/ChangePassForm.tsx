import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changePassAction } from '../../../store/actions';
import { RootState } from '../../../store/store';
import { Error, Loader } from '../../ui';
import { Container, StyledButton, StyledInput, Title, ValidationError } from './style';

type InputsType = {
  currentPassword: string;
  newPassword: string;
};

const ChangePassForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.userLoading);
  const error = useSelector((state: RootState) => state.user.userError);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputsType>();

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    dispatch(changePassAction(data));
    reset();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Title>Change password</Title>
      {error && <Error error={error} />}
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
