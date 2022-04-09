import React, { useState } from 'react';
import { Check } from '../../../../icons';
import { Container, Wrapper } from './style';

type CheckboxProps = {
  disabled?: boolean;
};
const Checkbox: React.FC<CheckboxProps> = ({ disabled }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Wrapper disabled={disabled} checked={checked}>
        <input
          disabled={disabled}
          style={{ display: 'none' }}
          checked={checked}
          type="checkbox"
          onChange={(e) => setChecked(e.target.checked)}
        />
        {checked && <Check />}
      </Wrapper>
    </Container>
  );
};

export default Checkbox;
