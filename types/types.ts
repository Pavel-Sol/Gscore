import { registerUserAction } from '../store/actions';

export type UserType = {
  email: string;
  username: string;
  token: string;
};

export type RegisterUserType = {
  email: string;
  username: string;
  password: string;
};

export type RegisterUserActionType = ReturnType<typeof registerUserAction>;
