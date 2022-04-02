import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CloseIcon, Exit, Settings } from '../../../icons';
import {
  Container,
  Nav,
  Heading,
  CloseBtnWrap,
  LogoWrap,
  Row,
  MoreBtn,
  ExtraMenu,
  ExtraMenuItem,
  StyledLink,
} from './style';

type MobileNavType = {
  visible: boolean;
  onToggleMobileNav: (isShow: boolean) => void;
};
const MobileNav: React.FC<MobileNavType> = ({ visible, onToggleMobileNav }) => {
  const [showExtraMenu, setShowExtraMenu] = useState(false);
  const toggleExtraMenu = () => {
    setShowExtraMenu(!showExtraMenu);
  };
  return (
    <Container visible={visible}>
      <Nav>
        <Heading>
          <CloseBtnWrap onClick={() => onToggleMobileNav(false)}>
            <CloseIcon />
          </CloseBtnWrap>
          <LogoWrap>
            <Image src="/img/Logo.png" layout="fill" objectFit="cover" />
          </LogoWrap>
        </Heading>
        <Row>
          <Link href="#">
            <a>My subscriptions</a>
          </Link>
        </Row>
        <Row>
          <MoreBtn onClick={toggleExtraMenu} showExtraMenu={showExtraMenu}>
            Alex
          </MoreBtn>
          <ExtraMenu showExtraMenu={showExtraMenu}>
            <ExtraMenuItem>
              <Settings />
              <Link href="#">
                <StyledLink>Settings</StyledLink>
              </Link>
            </ExtraMenuItem>
            <ExtraMenuItem>
              <Exit />
              <Link href="#">
                <StyledLink>Logout</StyledLink>
              </Link>
            </ExtraMenuItem>
          </ExtraMenu>
        </Row>
      </Nav>
    </Container>
  );
};

export default MobileNav;
