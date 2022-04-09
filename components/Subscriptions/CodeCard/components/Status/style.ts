import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    order: 1;
  }
`;

export const Title = styled.p`
  margin: 0px 0px 30px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatusText = styled('p')<{
  mode?: string;
}>`
  ${(props) => {
    switch (props.mode) {
      case 'ACTIVE':
        return `
        color: rgba(5, 193, 104, 1);
      `;
      case 'INACTIVE':
        return `
        color: rgba(255, 90, 101, 1);
      `;
      case 'HOLD':
        return `
        color: rgba(255, 158, 44, 1);
      `;
      default:
        return `
        color: white;
      `;
    }
  }}

  margin: 0px;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: lowercase;

  &:first-letter {
    text-transform: uppercase;
  }
`;
