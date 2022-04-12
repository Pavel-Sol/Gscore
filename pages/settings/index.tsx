import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangePassForm, ModeController, PersonalInfoForm } from 'components';

const Settings = () => {
  const [mode, setMode] = useState<'PERSONAL_INFO' | 'CHANGE_PASSWORD'>('PERSONAL_INFO');
  const toggleMode = (selectedMode: 'PERSONAL_INFO' | 'CHANGE_PASSWORD') => {
    setMode(selectedMode);
  };

  return (
    <>
      <Title>Settings</Title>
      <ModeController mode={mode} toggleMode={toggleMode} />
      {mode === 'PERSONAL_INFO' && <PersonalInfoForm />}
      {mode === 'CHANGE_PASSWORD' && <ChangePassForm />}
    </>
  );
};

const Title = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 48px;
  @media (max-width: 450px) {
    font-size: 1.7rem;
    margin-bottom: 38px;
  }
`;

export default Settings;
