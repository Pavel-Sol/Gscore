import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { personalInfoAction } from '../../../store/actions';
import { RootState } from '../../../store/store';
import { Error, Loader } from '../../ui';
import { Container, StyledButton, StyledInput, Title, ValidationError } from './style';

type InputsType = {
  email: string;
  username: string;
};

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.userLoading);
  const defaultName = useSelector((state: RootState) => state.user.userName);
  const defaultEmail = useSelector((state: RootState) => state.user.userEmail);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<InputsType>();

  useEffect(() => {
    if (defaultName && defaultEmail) {
      setValue('username', defaultName);
      setValue('email', defaultEmail);
    }
  }, [defaultName, defaultEmail]);

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    dispatch(personalInfoAction(data));
    reset();
  };

  if (loading) {
    return <Loader />;
  }

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
        <ValidationError>{errors.username && errors.username.message}</ValidationError>
        <StyledInput
          placeholder="Username"
          {...register('username', {
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
