import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { upgradeSubAction, RootState } from 'store';
import { SubscriptionType } from 'types';
import { Button } from 'components';
import { Container, Title, Radio, Item } from './style';

type UpgradeSubsProps = {
  curSubscription: SubscriptionType;
  oneCloseModal: () => void;
};
const UpgradeSubs: React.FC<UpgradeSubsProps> = ({ curSubscription, oneCloseModal }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const availableProducts = products.filter((el) => el.id !== curSubscription.product.id);
  const [checkedProduct, setCheckedProduct] = useState(availableProducts[0].name);

  const handleUpgrade = () => {
    const product = availableProducts.find((el) => el.name === checkedProduct);

    if (product) {
      dispatch(
        upgradeSubAction({
          productId: product?.id,
          subscribeId: curSubscription.id,
        }),
      );
    }
    oneCloseModal();
  };

  return (
    <Container>
      <Title>Choose a product to upgrade</Title>
      <div>
        {availableProducts.map((el) => {
          return (
            <Item key={el.id}>
              <Radio
                onChange={(e) => setCheckedProduct(e.target.name)}
                id={el.name}
                name={el.name}
                type="radio"
                checked={checkedProduct === el.name}
              />
              <label htmlFor={el.name}>{el.name}</label>
            </Item>
          );
        })}
      </div>

      <Button onClick={handleUpgrade}>Upgrade</Button>
    </Container>
  );
};

export default UpgradeSubs;
