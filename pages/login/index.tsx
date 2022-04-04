import React, { useState } from 'react';
import styled from 'styled-components';
import { CreateLogin } from '../../components/CreateLogin';
import { Stepper } from '../../components/Stepper';

const Login = () => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);
  const handleActiveStep = () => {};

  return (
    <Content>
      <Stepper step={activeStep} />
      {activeStep === 1 && <CreateLogin />}
    </Content>
  );
};

const Content = styled.div`
  max-width: 620px;
  margin: 0px auto;
`;
export default Login;
