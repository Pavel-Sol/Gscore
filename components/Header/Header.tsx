import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { Container, StyledHeader, LogoWrap } from './style';
import { DescNav, Burger, MobileNav } from './components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { LS } from '../../store/services';
import { reset } from '../../store/reducers';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const userName = useSelector((state: RootState) => state.user.userName);
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  const toggleMobileNav = (isShow: boolean) => {
    setIsShowMobileNav(isShow);
  };

  const handleLogout = () => {
    router.push('/');
    LS.removeToken();
    dispatch(reset());
  };

  return (
    <StyledHeader>
      <Container>
        <LogoWrap>
          <Image src="/img/Logo.png" layout="fill" objectFit="cover" />
        </LogoWrap>
        {isAuth && (
          <>
            <DescNav userName={userName} onLogout={handleLogout} />
            <Burger onToggleMobileNav={toggleMobileNav} />
            <MobileNav
              visible={isShowMobileNav}
              onToggleMobileNav={toggleMobileNav}
              onLogout={handleLogout}
            />
          </>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
