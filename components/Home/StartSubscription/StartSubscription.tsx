import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import {
  Container,
  Title,
  SubTitle,
  TariffContainer,
  TariffRow,
  TariffRowTitle,
  Total,
  TotalText,
  StyledBtn,
} from './style';

type StartSubscriptionProps = {
  tariff: ParsedUrlQuery;
};
const StartSubscription: React.FC<StartSubscriptionProps> = ({ tariff }) => {
  // console.log('tariff ', tariff);

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
          <p>{tariff.title}</p>
          <p>${tariff.price}</p>
        </TariffRow>
      </TariffContainer>
      <Total>
        <TotalText>Total:</TotalText>
        <TotalText>${tariff.price}</TotalText>
      </Total>
      <StyledBtn>Go to my subscriptions</StyledBtn>
    </Container>
  );
};

export default StartSubscription;
