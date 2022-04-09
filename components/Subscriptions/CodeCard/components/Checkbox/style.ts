import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 48px 0px 0px;
  flex: 0 1 28px;

  @media (max-width: 768px) {
    order: 0;
    margin: 0px 20px 0px 0px;
  }
`;

export const Wrapper = styled('label')<{
  disabled?: boolean;
  checked: boolean;
}>`
  width: 28px;
  height: 28px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.checked && !props.disabled) {
      return `
        background: rgba(252, 88, 66, 1);
        `;
    } else if (!props.checked && !props.disabled) {
      return `
      background: #fff;
      `;
    } else if (props.disabled) {
      return `
      background: rgba(199, 199, 199, 1);
      `;
    }
  }}
`;
