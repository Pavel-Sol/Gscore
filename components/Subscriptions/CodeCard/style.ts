import styled from 'styled-components';
import { Button } from '../../ui';

export const Container = styled.div`
  background-color: rgba(39, 39, 39, 1);
  border-radius: 12px;
  padding: 24px 50px 24px 32px;
  display: flex;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    flex-flow: wrap;
    padding: 32px 20px;
    align-items: center;
    margin-bottom: 24px;
  }
`;

export const StaledBtn = styled(Button)`
  height: 58px;
  margin: 35px 40px 0px 0px;
  @media (max-width: 768px) {
    order: 2;
    margin: 0px 0px 0px auto;
  }
`;
