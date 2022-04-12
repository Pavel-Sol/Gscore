import styled from 'styled-components';
import { Button, Input } from '../../ui';

export const Container = styled.div`
  padding: 20px 0px 220px 0px;
  @media (max-width: 768px) {
    padding: 20px 0px 50px 0px;
  }
`;
export const Title = styled.h2`
  font-size: 3.3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledInput = styled(Input)`
  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 43px;
  min-width: 200px;
`;

export const ValidationError = styled.p`
  min-height: 23px;
  color: red;
  margin: 3px 0;
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;
`;
export const PrevStep = styled.p`
  color: rgba(252, 88, 66, 1);
  margin-left: 10px;
  cursor: pointer;
`;
