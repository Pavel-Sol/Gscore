import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveStep } from '../../../store/reducers';
import {
  Container,
  Title,
  TariffContainer,
  TariffRow,
  TariffRowTitle,
  Total,
  TotalText,
  StyledBtn,
} from './style';

type CheckoutProps = {
  tariff: ParsedUrlQuery;
};
const Checkout: React.FC<CheckoutProps> = ({ tariff }) => {
  // console.log('tariff ', tariff);
  const dispatch = useDispatch();
  const handleNextStep = () => {
    dispatch(setActiveStep(4));
  };

  return (
    <Container>
      <Title>Checkout</Title>
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
      <StyledBtn onClick={handleNextStep}>Purchase</StyledBtn>
    </Container>
  );
};

export default Checkout;
