import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.bg.primary};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Container = styled.div`
  max-width: 1240px;
  padding: 0px 15px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 90px;
  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const LogoWrap = styled.div`
  width: 171px;
  height: 42px;
  position: relative;
  @media (max-width: 768px) {
    width: 130px;
    height: 32px;
  }
`;
