import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { buyProductAction, setActiveStep, RootState } from 'store';
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
  const handleBuyProduct = () => {
    const priceId = selectedProduct?.prices[0].id;
    if (priceId) {
      dispatch(buyProductAction(priceId));
      dispatch(setActiveStep(4));
    }
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
      <StyledBtn onClick={handleBuyProduct}>Purchase</StyledBtn>
    </Container>
  );
};

export default Checkout;
