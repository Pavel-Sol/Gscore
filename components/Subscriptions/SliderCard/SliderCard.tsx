import React from 'react';
import { SubscriptionType } from '../../../types/types';
import {
  Container,
  Heading,
  Label,
  Status,
  Bottom,
  Row,
  ProductName,
  Price,
  Period,
  StyledBtn,
  DarkCover,
} from './style';

type SliderCardProps = {
  index: number;
  curIndex: number;
  data: SubscriptionType;
};

const SliderCard: React.FC<SliderCardProps> = ({ index, curIndex, data }) => {
  return (
    <Container>
      {curIndex !== index && <DarkCover />}
      <Heading>
        <Label>CScore</Label>
        <Status>{data.status}</Status>
      </Heading>
      <Bottom>
        <Row>
          <ProductName>{data.product.name}</ProductName>
          <Price>${data.product.prices[0].price}</Price>
        </Row>
        <Period>valid until 21.10.2022</Period>
        <StyledBtn mode="secondary">View</StyledBtn>
      </Bottom>
    </Container>
  );
};

export default SliderCard;
