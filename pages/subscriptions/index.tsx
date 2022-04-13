import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCodesAction,
  getSubscriptionsAction,
  saveCodesAction,
  RootState,
  setError,
} from 'store';
import { CodeCard, Slider, NoSubscriptions, UpgradeSubs, Button, Error, Modal } from 'components';
import { CodeType, SubscriptionType } from 'types';

const Subscriptions = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.code.error);
  const subscriptions = useSelector((state: RootState) => state.subscription.subscriptions);
  const allCodes = useSelector((state: RootState) => state.code.codes);
  const [curSubscription, setCurSubscription] = useState<SubscriptionType>(subscriptions[0]);
  const currentCodes = allCodes.filter((el) => el.subscribeId === curSubscription?.id);
  const [isShowModal, setIsShowModal] = useState(false);
  const [checkedCodeList, setCheckedCodeList] = useState<CodeType[]>([]);

  const addCheckedCode = (code: CodeType) => {
    const updatedCheckedCodeList = [...checkedCodeList, code];
    setCheckedCodeList(updatedCheckedCodeList);
  };
  const removeCheckedCode = (code: CodeType) => {
    const updatedCheckedCodeList = checkedCodeList.filter((el) => el.id !== code.id);
    setCheckedCodeList(updatedCheckedCodeList);
  };

  const resetCheckedCodeList = () => {
    setCheckedCodeList([]);
    dispatch(setError(null));
  };

  const confirmCodes = () => {
    const codesIds = checkedCodeList.map((el) => el.id);
    const data = {
      subscribeId: curSubscription.id,
      codesIds: codesIds,
    };

    console.log('confirmCodes ', data);
    dispatch(saveCodesAction(data));
  };

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
        <UpgradeSubs curSubscription={curSubscription} oneCloseModal={closeModal} />
      </Modal>
      <Heading>
        <Title>My Subscriptions</Title>
        <Button onClick={() => setIsShowModal(true)}>Upgrade</Button>
      </Heading>
      <Slider
        resetCheckedCodeList={resetCheckedCodeList}
        subscriptions={subscriptions}
        onSelectCurSubscription={selectCurSubscription}
      />
      {error && <Error error={error} />}
      {currentCodes.map((code) => {
        return (
          <CodeCard
            key={code.id}
            codeInfo={code}
            addCheckedCode={addCheckedCode}
            removeCheckedCode={removeCheckedCode}
          />
        );
      })}
      <BtnWrap>
        <Button onClick={confirmCodes}>Confirm</Button>
      </BtnWrap>
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

const BtnWrap = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 0px;
`;

export default Subscriptions;
