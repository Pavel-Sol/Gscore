import styled from 'styled-components';

export const StepperWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StepperItem = styled.div`
  width: 32%;
`;
export const ItemTitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 10px;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export const ItemLine = styled('div')<{
  isActive: boolean;
}>`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  ${(props) =>
    props.isActive
      ? `background-color: rgba(252, 88, 66, 1);`
      : `background-color: rgba(57, 57, 57, 1);`};
`;
