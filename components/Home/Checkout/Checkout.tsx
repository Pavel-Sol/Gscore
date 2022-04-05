import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveStep } from '../../../store/reducers';
import { RootState } from '../../../store/store';
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


const Checkout = () => {
  const tariff = useSelector((state: RootState) => state.subscription.tariff);
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
          <p>{tariff?.title}</p>
          <p>${tariff?.price}</p>
        </TariffRow>
      </TariffContainer>
      <Total>
        <TotalText>Total:</TotalText>
        <TotalText>${tariff?.price}</TotalText>
      </Total>
      <StyledBtn onClick={handleNextStep}>Purchase</StyledBtn>
    </Container>
  );
};

export default Checkout;
