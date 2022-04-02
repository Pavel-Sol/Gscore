import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  position: relative;
  font-size: 1.25rem;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
`;

export const MoreBtn = styled('button')<{
  showExtraMenu: boolean;
}>`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 1.25rem;
  color: #fff;
  position: relative;
  bottom -2px;
  padding: 10px 22px 10px 10px;
  margin-left: 22px;
  margin-right: 15px;
  

  &::before {
    position: absolute;
    content: "";
    background: #fff;
    width: 10px;
    height: 2px;
    top: 20px;
    right: 0;
    transition: all 0.2s ease;
    ${(props) => (props.showExtraMenu ? `transform: rotate(-45deg)` : `transform: rotate(45deg)`)};
  }

  &::after {
    position: absolute;
    content: "";
    background: #fff;
    width: 10px;
    height: 2px;
    top: 20px;
    right: -6px;
    transition: all 0.2s ease;
    ${(props) => (props.showExtraMenu ? `transform: rotate(45deg)` : `transform: rotate(-45deg)`)};
  }
`;

export const ExtraMenu = styled('div')<{
  showExtraMenu: boolean;
}>`
  min-width: 188px;
  min-height: 136px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  background-color: ${(props) => props.theme.bg.secondary};
  position: absolute;
  top: 55px;
  right: 0;
  transition: all 0.3s ease;

  ${(props) => {
    switch (props.showExtraMenu) {
      case true:
        return `
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
        `;
      case false:
        return `
        visibility: hidden;
        transform: translateY(-30px);
        opacity: 0;
        `;
      default:
        return `
        visibility: hidden;
        transform: translateY(-30px);
        opacity: 0; 
        `;
    }
  }}
`;

export const ExtraMenuItem = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 7px 0px;
`;

export const StyledLink = styled('a')`
  margin-left: 12px;
`;
