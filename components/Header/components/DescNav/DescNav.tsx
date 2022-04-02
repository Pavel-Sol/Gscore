import Link from 'next/link';
import React, { useState } from 'react';
import { Exit, Settings } from '../../../icons';
import { Container, ExtraMenu, NavBar, MoreBtn, ExtraMenuItem, StyledLink } from './style';

type DescNavProps = {
  userName: string;
};
const DescNav: React.FC<DescNavProps> = ({ userName }) => {
  const [showExtraMenu, setShowExtraMenu] = useState(false);
  const toggleExtraMenu = () => {
    setShowExtraMenu(!showExtraMenu);
  };
  return (
    <Container>
      <NavBar>
        <Link href="#">
          <a>My subscriptions</a>
        </Link>
        <MoreBtn onClick={toggleExtraMenu} showExtraMenu={showExtraMenu}>
          {userName}
        </MoreBtn>
      </NavBar>
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
    </Container>
  );
};

export default DescNav;
