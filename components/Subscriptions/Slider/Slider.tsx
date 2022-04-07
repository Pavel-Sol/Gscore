import React from 'react';
import { SubscriptionType } from '../../../types/types';
import { SliderCard } from '../SliderCard';

type SliderProps = {
  subscriptions: SubscriptionType[];
};
const Slider: React.FC<SliderProps> = ({ subscriptions }) => {
  return (
    <div>
      <SliderCard />
    </div>
  );
};

export default Slider;
