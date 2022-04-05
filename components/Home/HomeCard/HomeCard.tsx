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
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

type HomeCardProps = {
  bg?: string;
  price: string;
  title: string;
};
const HomeCard: React.FC<HomeCardProps> = ({ bg, price, title }) => {
  const router = useRouter();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const handleGetGScore = () => {
    if (isAuth) {
      router.push('subscriptions');
    } else {
      router.push({
        pathname: 'auth',
        query: { price, title },
      });
    }
  };
  return (
    <Container>
      <Content bg={bg}>
        <Heading>
          <Price>{`$${price}`}</Price>
          <Title>{title}</Title>
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
              <ItemText>{title}</ItemText>
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
          <StyledBtn onClick={handleGetGScore} color={bg}>
            Get Score
          </StyledBtn>
        </Bottom>
      </Content>
    </Container>
  );
};

export default HomeCard;
