import styled from 'styled-components';
import { Button } from '../../ui';

export const Container = styled.div`
  width: 620px;
  height: 334px;
  border-radius: 12px;
  background-color: rgba(57, 57, 57, 1);
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 318px;
    height: 268px;
  }
`;

export const Heading = styled.div`
  flex: 32%;
  padding: 10px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(150, 150, 150, 1);
  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

export const Label = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Status = styled.p`
  font-size: 1.3rem;
  color: #05c168;
  font-weight: 700;
`;

export const Bottom = styled.div`
  flex: 68%;
  padding: 32px 81px 32px 32px;
  @media (max-width: 768px) {
    padding: 16px 51px 16px 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductName = styled.p`
  margin: 0;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const Price = styled.p`
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Period = styled.p`
  color: #969696;
  margin: 12px 0px 0px 0px;
`;

export const StyledBtn = styled(Button)`
  width: 120px;
  font-weight: 700;
  margin-top: 32px;
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;
