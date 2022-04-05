import styled from 'styled-components';
import { Button } from '../../ui';

export const Container = styled.div`
  padding: 20px 0px 220px 0px;
  @media (max-width: 768px) {
    padding: 20px 0px 50px 0px;
  }
`;

export const Title = styled.h2`
  font-size: 3.3rem;
  margin: 64px 0px 16px 0px;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const SubTitle = styled.p`
  font-size: 0.8rem;
  margin-bottom: 40px;
`;

export const TariffContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: rgba(39, 39, 39, 1);
`;

export const TariffRow = styled.div`
  height: 116px;
  padding: 0px 72px 0px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 24px;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(150, 150, 150, 1);
  }
`;

export const TariffRowTitle = styled.p`
  font-weight: 700;
`;

export const Total = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0px 45px 0px;
`;

export const TotalText = styled.p`
  font-weight: 700;
  font-size: 28px;
  margin: 0;
`;

export const StyledBtn = styled(Button)`
  width: 100%;
`;
