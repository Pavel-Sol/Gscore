import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ControllerItem = styled('div')<{
  isActive?: boolean;
}>`
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? '1px solid rgba(252, 88, 66, 1)' : '1px solid rgba(57, 57, 57, 1)'};
  color: ${(props) => (props.isActive ? 'rgba(252, 88, 66, 1)' : 'rgba(57, 57, 57, 1)')};
`;

export const EmptyItem = styled.div`
  flex: 1 0 auto;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(57, 57, 57, 1);
`;
