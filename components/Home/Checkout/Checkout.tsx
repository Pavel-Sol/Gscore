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
  const selectedProduct = useSelector((state: RootState) => state.product.selectedProduct);
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
          <p>{selectedProduct?.name}</p>
          <p>${selectedProduct?.prices[0].price}</p>
        </TariffRow>
      </TariffContainer>
      <Total>
        <TotalText>Total:</TotalText>
        <TotalText>${selectedProduct?.prices[0].price}</TotalText>
      </Total>
      <StyledBtn onClick={handleNextStep}>Purchase</StyledBtn>
    </Container>
  );
};

export default Checkout;
