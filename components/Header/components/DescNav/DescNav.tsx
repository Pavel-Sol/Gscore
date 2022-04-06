import Link from 'next/link';
import React, { useState } from 'react';
import { Exit, Settings } from '../../../icons';
import {
  Container,
  ExtraMenu,
  NavBar,
  MoreBtn,
  ExtraMenuItem,
  StyledLink,
  LogoutBtn,
} from './style';

type DescNavProps = {
  userName: string;
  onLogout: () => void;
};
const DescNav: React.FC<DescNavProps> = ({ userName, onLogout }) => {
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
          <Link href="settings">
            <StyledLink>Settings</StyledLink>
          </Link>
        </ExtraMenuItem>
        <ExtraMenuItem>
          <Exit />
          <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>
        </ExtraMenuItem>
      </ExtraMenu>
    </Container>
  );
};

export default DescNav;
