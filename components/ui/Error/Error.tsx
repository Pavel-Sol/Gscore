import React from 'react';
import { Container } from './style';

type ErrorType = {
  error: string;
};
const Error: React.FC<ErrorType> = ({ error }) => {
  return <Container>{error}</Container>;
};

export default Error;
