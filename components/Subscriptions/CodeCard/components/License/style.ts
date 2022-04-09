import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 1 296px;
  margin: 0px 28px 0px 0px;
  @media (max-width: 768px) {
    margin: 15px 0px 0px 0px;
    flex: 0 1 100%;
    order: 3;
  }
`;

export const Title = styled.p`
  margin: 0px 0px 10px 0px;
`;

export const Field = styled.div`
  background: #393939;
  border-radius: 6px;
  height: 68px;
  display: flex;
  align-items: center;
  padding: 0px 24px;
  justify-content: space-between;
`;

export const FieldText = styled.input`
  margin: 0px 15px 0px 0px;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  width: 100%;
`;

export const CopyBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
`;
