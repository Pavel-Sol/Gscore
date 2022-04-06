import React from 'react';
import { Container, ControllerItem, EmptyItem } from './style';

type ModeControllerType = {
  mode: 'PERSONAL_INFO' | 'CHANGE_PASSWORD';
  toggleMode: (selectedMode: 'PERSONAL_INFO' | 'CHANGE_PASSWORD') => void;
};
const ModeController: React.FC<ModeControllerType> = ({ mode, toggleMode }) => {
  return (
    <Container>
      <ControllerItem
        onClick={() => toggleMode('PERSONAL_INFO')}
        isActive={mode === 'PERSONAL_INFO'}>
        Personal info
      </ControllerItem>
      <ControllerItem
        onClick={() => toggleMode('CHANGE_PASSWORD')}
        isActive={mode === 'CHANGE_PASSWORD'}>
        Change password
      </ControllerItem>
      <EmptyItem />
    </Container>
  );
};

export default ModeController;
