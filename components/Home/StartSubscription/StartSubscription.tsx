import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import {
  Container,
  Title,
  SubTitle,
  TariffContainer,
  TariffRow,
  TariffRowTitle,
  StyledBtn,
} from './style';

const StartSubscription = () => {
  const tariff = useSelector((state: RootState) => state.subscription.tariff);
  const router = useRouter();
  return (
    <Container>
      <Title>Start your subscription</Title>
      <SubTitle>
        We have sent you a payment receipt by e-mail and a link to download the plugin with a
        license key.
      </SubTitle>
      <TariffContainer>
        <TariffRow>
          <TariffRowTitle>Package name</TariffRowTitle>
          <TariffRowTitle>Price</TariffRowTitle>
        </TariffRow>
        <TariffRow>
          <p>{tariff?.title}</p>
          <p>${tariff?.price}</p>
        </TariffRow>
      </TariffContainer>
      <StyledBtn onClick={() => router.push('subscriptions')}>Go to my subscriptions</StyledBtn>
    </Container>
  );
};

export default StartSubscription;
