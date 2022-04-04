import React, { useState } from 'react';
import Image from 'next/image';

import { Container, StyledHeader, LogoWrap } from './style';
import { DescNav, Burger, MobileNav } from './components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const userName = 'Victor';
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  const toggleMobileNav = (isShow: boolean) => {
    setIsShowMobileNav(isShow);
  };

  return (
    <StyledHeader>
      <Container>
        <LogoWrap>
          <Image src="/img/Logo.png" layout="fill" objectFit="cover" />
        </LogoWrap>
        {isAuth && <DescNav userName={userName} />}
        {isAuth && <Burger onToggleMobileNav={toggleMobileNav} />}
        {isAuth && <MobileNav visible={isShowMobileNav} onToggleMobileNav={toggleMobileNav} />}
      </Container>
    </StyledHeader>
  );
};

export default Header;
