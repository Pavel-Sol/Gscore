import React, { useState } from 'react';

import { useWindowDimensions } from 'hooks';
import { SubscriptionType } from 'types';
import { SliderCard, SliderController } from 'components';
import { Container, SliderRow, SliderContainer, Item } from './style';

type SliderProps = {
  subscriptions: SubscriptionType[];
  onSelectCurSubscription: (ind: number) => void;
  resetCheckedCodeList: () => void;
};
const Slider: React.FC<SliderProps> = ({
  subscriptions,
  onSelectCurSubscription,
  resetCheckedCodeList,
}) => {
  const [offset, setOffset] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const windowWidth = useWindowDimensions();
  const offsetWidth = windowWidth && windowWidth <= 768 ? 348 : 650;

  const handlePrev = () => {
    setOffset((prev) => prev + offsetWidth);
    onSelectCurSubscription(curIndex - 1);
    setCurIndex((prev) => prev - 1);
    resetCheckedCodeList();
  };

  const handleNext = () => {
    setOffset((prev) => prev - offsetWidth);
    onSelectCurSubscription(curIndex + 1);
    setCurIndex((prev) => prev + 1);
    resetCheckedCodeList();
  };

  return (
    <Container>
      <SliderContainer>
        <SliderRow style={{ transform: `translateX(${offset}px)` }}>
          {subscriptions.map((item, index) => {
            return (
              <Item key={item.id}>
                <SliderCard index={index} curIndex={curIndex} data={item} />
              </Item>
            );
          })}
        </SliderRow>
      </SliderContainer>

      <SliderController
        onNext={handleNext}
        onPrev={handlePrev}
        curIndex={curIndex}
        pageAmount={subscriptions.length}
        disabledPrev={curIndex === 0}
        disabledNext={curIndex === subscriptions.length - 1}
      />
    </Container>
  );
};

export default Slider;
