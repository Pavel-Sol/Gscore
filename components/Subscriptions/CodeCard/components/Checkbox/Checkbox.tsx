import React, { useState } from 'react';

import { CodeType } from 'types';
import { Check } from 'components';
import { Container, Wrapper } from './style';

type CheckboxProps = {
  disabled?: boolean;
  codeInfo: CodeType;
  addCheckedCode: (code: CodeType) => void;
  removeCheckedCode: (code: CodeType) => void;
};
const Checkbox: React.FC<CheckboxProps> = ({
  codeInfo,
  disabled,
  addCheckedCode,
  removeCheckedCode,
}) => {
  const [checked, setChecked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);

    if (!checked) {
      addCheckedCode(codeInfo);
    } else {
      removeCheckedCode(codeInfo);
    }
  };
  return (
    <Container>
      <Wrapper disabled={disabled} checked={checked}>
        <input
          disabled={disabled}
          style={{ display: 'none' }}
          checked={checked}
          type="checkbox"
          onChange={(e) => onChange(e)}
        />
        {checked && !disabled && <Check />}
      </Wrapper>
    </Container>
  );
};

export default Checkbox;
