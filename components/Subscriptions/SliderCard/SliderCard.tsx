import React from 'react';
import { Button } from '../../ui';
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
} from './style';

const SliderCard = () => {
  return (
    <Container>
      <Heading>
        <Label>Gscore</Label>
        <Status>Active</Status>
      </Heading>
      <Bottom>
        <Row>
          <ProductName>Single site license</ProductName>
          <Price>$77</Price>
        </Row>
        <Period>valid until 21.10.2022</Period>
        <StyledBtn mode="secondary">View</StyledBtn>
      </Bottom>
    </Container>
  );
};

export default SliderCard;
