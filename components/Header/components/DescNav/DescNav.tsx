import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { Exit, Settings } from 'components';
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
  const toggleExtraMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowExtraMenu(!showExtraMenu);
  };

  useEffect(() => {
    document.addEventListener('click', () => setShowExtraMenu(false));

    return function cleanup() {
      document.removeEventListener('click', () => setShowExtraMenu(false));
    };
  }, []);

  return (
    <Container>
      <NavBar>
        <Link href="subscriptions">
          <a>My subscriptions</a>
        </Link>
        <MoreBtn onClick={(e) => toggleExtraMenu(e)} showExtraMenu={showExtraMenu}>
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
