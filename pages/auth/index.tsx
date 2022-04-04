import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Login, Register, Stepper } from '../../components';
import { RootState } from '../../store/store';

const Auth = () => {
  const activeStep = useSelector((state: RootState) => state.user.activeStep);

  return (
    <Content>
      <Stepper step={activeStep} />
      {activeStep === 1 && <Register />}
      {activeStep === 2 && <Login />}
    </Content>
  );
};

const Content = styled.div`
  max-width: 620px;
  margin: 0px auto;
`;
export default Auth;