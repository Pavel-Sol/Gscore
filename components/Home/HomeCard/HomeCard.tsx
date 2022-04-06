import React from 'react';
import { useRouter } from 'next/router';
import { ListItem } from '../../icons';
import {
  Container,
  Content,
  Heading,
  Price,
  Title,
  Desc,
  Bottom,
  BottomList,
  Item,
  ItemText,
  StyledBtn,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { selectProduct, setActiveStep } from '../../../store/reducers';
import { ProductType } from '../../../types/types';

type HomeCardProps = {
  index: number;
  product: ProductType;
};
const HomeCard: React.FC<HomeCardProps> = ({ index, product }) => {
  const router = useRouter();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const dispatch = useDispatch();
  const bg = index === 1 ? 'rgba(252, 88, 66, 1)' : 'rgba(39, 39, 39, 1)';

  const handleSelectProduct = () => {
    dispatch(selectProduct(product));

    if (isAuth) {
      dispatch(setActiveStep(3));
      router.push('auth');
    } else {
      dispatch(setActiveStep(1));
      router.push('auth');
    }
  };
  return (
    <Container>
      <Content bg={bg}>
        <Heading>
          <Price>{`$${product.prices[0].price}`}</Price>
          <Title>{product.name}</Title>
          <Desc>
            Get the advanced WordPress plugin that optimizes content with GSC keywords at one low
            annual price
          </Desc>
        </Heading>
        <Bottom>
          <BottomList>
            <Item>
              <div>
                <ListItem stroke={bg} />
              </div>
              <ItemText>{product.name}</ItemText>
            </Item>
            <Item>
              <div>
                <ListItem stroke={bg} />
              </div>
              <ItemText>Special introductory pricing</ItemText>
            </Item>
            <Item>
              <div>
                <ListItem stroke={bg} />
              </div>
              <ItemText>Unlimited Pages and Keywords</ItemText>
            </Item>
            <Item>
              <div>
                <ListItem stroke={bg} />
              </div>
              <ItemText>Billed annually</ItemText>
            </Item>
          </BottomList>
          <StyledBtn onClick={handleSelectProduct} color={bg}>
            Get Score
          </StyledBtn>
        </Bottom>
      </Content>
    </Container>
  );
};

export default HomeCard;
