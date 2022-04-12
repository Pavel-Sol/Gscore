import React from 'react';
import { ArrowLeft, ArrowRight } from 'components';
import { Container, Counter, NumberCurPage, PageAmount, Btn } from './style';

type SliderControllerProps = {
  onNext: () => void;
  onPrev: () => void;
  pageAmount: number;
  curIndex: number;
  disabledPrev: boolean;
  disabledNext: boolean;
};
const SliderController: React.FC<SliderControllerProps> = ({
  curIndex,
  pageAmount,
  onPrev,
  onNext,
  disabledPrev,
  disabledNext,
}) => {
  return (
    <Container>
      <Btn disabled={disabledPrev} onClick={onPrev}>
        <ArrowLeft color={disabledPrev && '#393939'} />
      </Btn>
      <Counter>
        <NumberCurPage>{curIndex + 1}</NumberCurPage>
        <PageAmount>/{pageAmount}</PageAmount>
      </Counter>
      <Btn disabled={disabledNext} onClick={onNext}>
        <ArrowRight color={disabledNext && '#393939'} />
      </Btn>
    </Container>
  );
};

export default SliderController;
