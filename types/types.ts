import { registerUserAction, loginUserAction } from '../store/actions';

export type UserType = {
  id: number;
  email: string;
  username: string;
  token: string;
};

export type RegisterRequestType = {
  email: string;
  username: string;
  password: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
  user: UserType;
};

export type AuthMeResponseType = {
  id: number;
  email: string;
  username: string;
};

export type TariffType = {
  title: string;
  price: string;
};

export type RegisterUserActionType = ReturnType<typeof registerUserAction>;
export type LoginUserActionType = ReturnType<typeof loginUserAction>;
