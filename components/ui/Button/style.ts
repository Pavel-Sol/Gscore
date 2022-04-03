import styled from 'styled-components';

export const ButtonStyled = styled('button')<{
  mode?: 'primary' | 'secondary' | undefined;
}>`
  ${(props) => {
    switch (props.mode) {
      case 'primary':
        return `
          background-color: #FC5842;
          color: white;
          &:hover {
            background-color: #f76855;
          }
        `;
      case 'secondary':
        return `
          background-color: white;
          color: #FC5842;
          &:hover {
            background-color: #e2d8d7;
          }
        `;
      default:
        return `
          background-color: #FC5842;
          color: white;
          &:hover {
            background-color: #f76855;
          }
        `;
    }
  }}
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  transition: all 0.3s ease;
  padding: 20px 24px;
`;
