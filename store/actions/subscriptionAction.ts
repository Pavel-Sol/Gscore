import { createAction } from '@reduxjs/toolkit';
import { UpgradeSubRequestType } from '../../types/types';

export const getSubscriptionsAction = createAction('getSubscriptions');

export const upgradeSubAction = createAction('upgradeSubscription', (data: UpgradeSubRequestType) => {
   return {
     payload: {
       data,
     },
   };
 });