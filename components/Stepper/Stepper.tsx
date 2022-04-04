import React from 'react';
import { StepperWrap, StepperItem, ItemTitle, ItemLine } from './style';

type StepperProps = {
  step: 1 | 2 | 3 | 4;
};
const Stepper: React.FC<StepperProps> = ({ step }) => {
  if (step > 3) {
    return null;
  }

  return (
    <StepperWrap>
      <StepperItem>
        <ItemTitle>Create account</ItemTitle>
        <ItemLine isActive={step === 1} />
      </StepperItem>
      <StepperItem>
        <ItemTitle>Log In</ItemTitle>
        <ItemLine isActive={step === 2} />
      </StepperItem>
      <StepperItem>
        <ItemTitle>Checkout</ItemTitle>
        <ItemLine isActive={step === 3} />
      </StepperItem>
    </StepperWrap>
  );
};

export default Stepper;
