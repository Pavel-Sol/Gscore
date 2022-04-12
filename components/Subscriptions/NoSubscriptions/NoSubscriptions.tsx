import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { CloseIcon, Button } from 'components';
import { Container, CloseBtn, Title, SubTitle } from './style';

const NoSubscriptions = () => {
  const [active, setActive] = useState(true);
  const router = useRouter();
  return (
    <Container>
      {active && (
        <>
          <CloseBtn onClick={() => setActive(false)}>
            <CloseIcon />
          </CloseBtn>
          <Title>No active subscriptions</Title>
          <SubTitle>You can subscribe right now by clicking on the button below</SubTitle>
          <Button onClick={() => router.push('/')}>Get Gscore</Button>
        </>
      )}
    </Container>
  );
};

export default NoSubscriptions;
