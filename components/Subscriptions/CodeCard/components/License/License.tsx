import React from 'react';
import useClipboard from 'react-use-clipboard';
import { Copy } from '../../../../icons';
import { Container, Title, Field, FieldText, CopyBtn } from './style';

type LicenseProps = {
  text: string;
};
const License: React.FC<LicenseProps> = ({ text }) => {
  const [isCopied, setCopied] = useClipboard(text);
  return (
    <Container>
      <Title>License code</Title>
      <Field>
        <FieldText defaultValue={text} disabled />
        <CopyBtn onClick={setCopied}>
          <Copy />
        </CopyBtn>
      </Field>
    </Container>
  );
};

export default License;
