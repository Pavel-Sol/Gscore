import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.bg.primary};
`;

export const Container = styled.div`
  max-width: 1240px;
  padding: 0px 15px;
  margin: 0px auto;
`;

export const Heading = styled.div`
  padding: 20px 0;
  border-top: 1px solid rgba(57, 57, 57, 1);
`;

export const LogoWrap = styled.div`
  width: 171px;
  height: 42px;
  position: relative;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    width: 130px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

export const HeadingDesc = styled.p`
  font-size: 1.125rem;
  max-width: 300px;
`;
export const Bottom = styled.div`
  padding: 20px 0;
  border-top: 1px solid rgba(57, 57, 57, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Policy = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PolicyText = styled.p`
  margin: 0;
  position: relative;
  margin-right: 12px;
  &:after {
    position: absolute;
    content: '';
    background: #fff;
    width: 2px;
    height: 15px;
    top: 3px;
    right: -6px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  position: relative;
  margin-right: 12px;
  cursor: pointer;
  &:not(:last-child):after {
    position: absolute;
    content: '';
    background: #fff;
    width: 2px;
    height: 15px;
    top: 3px;
    right: -6px;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
export const SocialItem = styled.div`
  margin: 0px 5px;
`;
