import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin 46px 0px;
  @media (max-width: 768px) {
   margin 26px 0px;
   justify-content: center;
 }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 7px;
`;

export const NumberCurPage = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

export const PageAmount = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: #393939;
`;

export const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;
