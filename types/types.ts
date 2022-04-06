import { registerUserAction, loginUserAction, buyProductAction } from '../store/actions';

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
  message?: string | string[];
};

export type AuthMeResponseType = {
  id: number;
  email: string;
  username: string;
};
// ------------------------------
// Product
export type ProductPriceType = {
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

// export type BuyProductType = {
//   priceId: number;
// };

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

// ---------------------------
export type RegisterUserActionType = ReturnType<typeof registerUserAction>;
export type LoginUserActionType = ReturnType<typeof loginUserAction>;
export type BuyProductActionType = ReturnType<typeof buyProductAction>;
