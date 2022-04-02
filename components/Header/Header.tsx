import React, { useState } from 'react';
import Image from 'next/image';

import { Container, StyledHeader, LogoWrap } from './style';
import { DescNav, Burger, MobileNav } from './components';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const isAuth = true;
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
