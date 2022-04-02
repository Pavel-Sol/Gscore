import React from 'react';
import { BurgerIcon } from '../../../icons';
import { StyledBurger } from './style';

type BurgerProps = {
  onToggleMobileNav: (isShow: boolean) => void;
};
const Burger: React.FC<BurgerProps> = ({ onToggleMobileNav }) => {
  return (
    <StyledBurger onClick={() => onToggleMobileNav(true)}>
      <BurgerIcon />
    </StyledBurger>
  );
};

export default Burger;
