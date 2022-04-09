import React from 'react';
import { Container, Title, Field, FieldText } from './style';

type DomainProps = {
  domain: string | null;
};
const Domain: React.FC<DomainProps> = ({ domain }) => {
  return (
    <Container>
      <Title>Domain</Title>
      <Field>{domain && <FieldText defaultValue={domain} disabled />}</Field>
    </Container>
  );
};

export default Domain;
