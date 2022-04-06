import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptionsAction } from '../../store/actions';
import { RootState } from '../../store/store';

const Subscriptions = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((state: RootState) => state.subscription.subscriptions);
  console.log('subscriptions ', subscriptions);

  useEffect(() => {
    dispatch(getSubscriptionsAction());
  }, []);

  return <div>Subscriptions!!!!!!!!!!!!!</div>;
};

export default Subscriptions;
