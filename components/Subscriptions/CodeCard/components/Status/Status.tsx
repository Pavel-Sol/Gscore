import React from 'react';
import { Container, Title, StatusText } from './style';

type StatusProps = {
  status: string;
};
const Status: React.FC<StatusProps> = ({ status }) => {
  return (
    <Container>
      <Title>Status</Title>
      <StatusText mode={status}>{status}</StatusText>
    </Container>
  );
};

export default Status;
