import React from 'react';
import useClipboard from 'react-use-clipboard';
import { Copy } from '../../../../icons';
import { Container, Title, Field, FieldText, CopyBtn } from './style';

type LicenseProps = {
  license: string;
};
const License: React.FC<LicenseProps> = ({ license }) => {
  const [isCopied, setCopied] = useClipboard(license);
  return (
    <Container>
      <Title>License code</Title>
      <Field>
        <FieldText defaultValue={license} disabled />
        <CopyBtn onClick={setCopied}>
          <Copy />
        </CopyBtn>
      </Field>
    </Container>
  );
};

export default License;
