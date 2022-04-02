import styled from 'styled-components';

export const Container = styled('div')<{
  visible: boolean;
}>`
  @media (min-width: 768px) {
    display: none;
  }
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  ${(props) => (props.visible ? `transform: translateX(0)` : `transform: translateX(200%)`)};
`;

export const Nav = styled.div`
  width: 255px;
  height: 100%;
  background-color: rgba(39, 39, 39, 1);
  padding: 30px 21px;
  font-size: 1rem;
`;

export const Heading = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CloseBtnWrap = styled.div`
  padding: 5px;
  margin-right: 17px;
`;

export const LogoWrap = styled.div`
  width: 130px;
  height: 32px;
  position: relative;
`;

export const Row = styled.div`
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid rgba(57, 57, 57, 1);
`;
export const MoreBtn = styled('button')<{
  showExtraMenu: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  color: #fff;
  position: relative;
  padding: 0;

  &::before {
    position: absolute;
    content: '';
    background: #fff;
    width: 10px;
    height: 2px;
    top: 10px;
    right: 10px;
    transition: all 0.2s ease;
    ${(props) => (props.showExtraMenu ? `transform: rotate(-45deg)` : `transform: rotate(45deg)`)};
  }

  &::after {
    position: absolute;
    content: '';
    background: #fff;
    width: 10px;
    height: 2px;
    top: 10px;
    right: 4px;
    transition: all 0.2s ease;
    ${(props) => (props.showExtraMenu ? `transform: rotate(45deg)` : `transform: rotate(-45deg)`)};
  }
`;

export const ExtraMenu = styled('div')<{
  showExtraMenu: boolean;
}>`
  ${(props) => {
    switch (props.showExtraMenu) {
      case true:
        return `
        display: block;
      `;
      case false:
        return `
        display: none;
      `;
      default:
        return `
        display: none;
      `;
    }
  }}
`;

export const ExtraMenuItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 15px 0px;
`;

export const StyledLink = styled('a')`
  margin: 5px 0;
  margin-left: 15px;
`;
