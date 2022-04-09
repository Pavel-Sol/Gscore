import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCodesAction, getSubscriptionsAction } from '../../store/actions';
import { RootState } from '../../store/store';
import { CodeCard, Slider } from '../../components';
import { SubscriptionType } from '../../types/types';

const Subscriptions = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((state: RootState) => state.subscription.subscriptions);
  const allCodes = useSelector((state: RootState) => state.code.codes);
  const [curSubscription, setCurSubscription] = useState<SubscriptionType>(subscriptions[0]);
  const codesBySubs = allCodes.filter((el) => el.subscribeId === curSubscription.id);

  const selectCurSubscription = (ind: number) => {
    setCurSubscription(subscriptions[ind]);
  };

  useEffect(() => {
    dispatch(getSubscriptionsAction());
    dispatch(getCodesAction());
  }, []);

  return (
    <>
      <Title>My Subscriptions</Title>
      <Slider subscriptions={subscriptions} onSelectCurSubscription={selectCurSubscription} />
      <>
        {codesBySubs.map((code) => {
          return <CodeCard key={code.id} codeInfo={code} />;
        })}
      </>
    </>
  );
};

const Title = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 48px;
  @media (max-width: 450px) {
    font-size: 1.7rem;
  }
`;

export default Subscriptions;
