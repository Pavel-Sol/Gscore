import styled from 'styled-components';
import { Button, Input } from '../../ui';

export const Container = styled.div`
  max-width: 518px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-top: 48px;
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
