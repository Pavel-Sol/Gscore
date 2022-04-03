import React from 'react';
import { ButtonStyled } from './style';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  mode?: 'primary' | 'secondary' | undefined;
};

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

export default Button;
