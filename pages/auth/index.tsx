import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Checkout, Login, Register, StartSubscription, Stepper } from '../../components';
import { RootState } from '../../store/store';

const Auth = () => {
  const activeStep = useSelector((state: RootState) => state.user.activeStep);
  const router = useRouter();
  const selectedTariff = router.query; // выбранная карта с ценой и названием(передал через query)

  return (
    <Content>
      <Stepper step={activeStep} />
      {activeStep === 1 && <Register />}
      {activeStep === 2 && <Login />}
      {activeStep === 3 && <Checkout tariff={selectedTariff} />}
      {activeStep === 4 && <StartSubscription tariff={selectedTariff} />}
    </Content>
  );
};

const Content = styled.div`
  max-width: 620px;
  margin: 0px auto;
`;
export default Auth;
