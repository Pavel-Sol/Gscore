import React from 'react';
import { InputStyled } from './style';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <InputStyled ref={ref} {...props} />
));

export default Input;
