import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getCodesAction, getSubscriptionsAction } from '../../store/actions';
import { RootState } from '../../store/store';
import { CodeCard, Slider, NoSubscriptions, UpgradeSubs } from '../../components';
import { SubscriptionType } from '../../types/types';
import { Button, Modal } from '../../components/ui';

const Subscriptions = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((state: RootState) => state.subscription.subscriptions);
  const allCodes = useSelector((state: RootState) => state.code.codes);
  const [curSubscription, setCurSubscription] = useState<SubscriptionType>(subscriptions[0]);
  const currentCodes = allCodes.filter((el) => el.subscribeId === curSubscription?.id);
  const [isShowModal, setIsShowModal] = useState(false);

  const closeModal = () => {
    setIsShowModal(false);
  };

  useEffect(() => {
    dispatch(getSubscriptionsAction());
    dispatch(getCodesAction());
  }, []);

  useEffect(() => {
    setCurSubscription(subscriptions[0]);
  }, [subscriptions]);

  const selectCurSubscription = (ind: number) => {
    setCurSubscription(subscriptions[ind]);
  };

  if (subscriptions.length === 0) {
    return <NoSubscriptions />;
  }

  return (
    <>
      <Modal visible={isShowModal} oneCloseModal={closeModal}>
        <UpgradeSubs curSubscription={curSubscription} />
      </Modal>
      <Heading>
        <Title>My Subscriptions</Title>
        <Button onClick={() => setIsShowModal(true)}>Upgrade</Button>
      </Heading>
      <Slider subscriptions={subscriptions} onSelectCurSubscription={selectCurSubscription} />
      {currentCodes.map((code) => {
        return <CodeCard key={code.id} codeInfo={code} />;
      })}
    </>
  );
};

const Title = styled.h1`
  font-size: 2.75rem;
  margin: 0;
  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export default Subscriptions;
