import React from 'react';
import { Container, Title, Field, FieldText } from './style';

type DomainProps = {
  text?: string;
};
const Domain: React.FC<DomainProps> = ({ text }) => {
  return (
    <Container>
      <Title>Domain</Title>
      <Field>
        <FieldText defaultValue={text} disabled />
      </Field>
    </Container>
  );
};

export default Domain;
