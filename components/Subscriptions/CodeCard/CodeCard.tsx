import React from 'react';
import { CodeType } from '../../../types/types';
import { Checkbox, License, Domain, Status } from './components';
import { Container, StaledBtn } from './style';

type CodeCardProps = {
  codeInfo: CodeType;
};
const CodeCard: React.FC<CodeCardProps> = ({ codeInfo }) => {
  return (
    <Container>
      <Checkbox />
      <License license={codeInfo.code} />
      <Domain domain={codeInfo.origin} />
      {codeInfo.status === 'INACTIVE' && <StaledBtn mode="secondary">Activate</StaledBtn>}
      <Status status={codeInfo.status} />
    </Container>
  );
};

export default CodeCard;
