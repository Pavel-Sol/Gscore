import {
  registerUserAction,
  loginUserAction,
  buyProductAction,
  personalInfoAction,
  changePassAction,
} from '../store/actions';

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
export type RegisterResponseType = {
  id: number;
  email: string;
  username: string;
  token: string;
  message?: string | string[];
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
  user: UserType;
  username: string;
  email: string;
};

export type AuthMeResponseType = {
  id: number;
  email: string;
  username: string;
};

export type PersonalInfoRequestType = {
  email: string;
  username: string;
};
export type ChangeInfoResponseType = {
  id: number;
  email: string;
  username: string;
};

export type ChangePassRequestType = {
  currentPassword: string;
  newPassword: string;
};

// ------------------------------
// Product
type ProductPriceType = {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
};

export type ProductType = {
  id: number;
  sitesCount: number;
  name: string;
  prices: ProductPriceType[];
};

export type BuyProductResponseType = {
  subscribe: {
    userId: number;
    productId: number;
    currentPeriodStart: number;
    currentPeriodEnd: number;
    status: string;
    id: number;
  };
};
// ------------------------------
// Code
export type CodeType = {
  id: number;
  code: string;
  origin: null;
  status: string;
  subscribeId: number;
  userId: number;
};
// -----------------------------------------
// Subscription

export type SubscriptionType = {
  codes: CodeType[];
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: string;
  product: ProductType;
};
// ---------------------------
export type RegisterUserActionType = ReturnType<typeof registerUserAction>;
export type LoginUserActionType = ReturnType<typeof loginUserAction>;
export type BuyProductActionType = ReturnType<typeof buyProductAction>;
export type PersonalInfoActionType = ReturnType<typeof personalInfoAction>;
export type ChangePassActionType = ReturnType<typeof changePassAction>;
