import React from 'react';
import { Checkbox, License, Domain, Status } from './components';
import { Container, StaledBtn } from './style';

const CodeCard = () => {
  const licenseText = 't t ee st text test xt test text 555555 555555';
  const domainText = 'domain domain domain domain domain domain';
  const status = 'ACTIVE';
  return (
    <Container>
      <Checkbox />
      <License text={licenseText} />
      <Domain text={domainText} />
      {/* {status === 'INACTIVE' && <StaledBtn mode="secondary">Activate</StaledBtn>} */}
      <Status status={status} />
    </Container>
  );
};

export default CodeCard;
