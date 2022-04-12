import React from 'react';
import { useDispatch } from 'react-redux';
import { activateCodeAction } from '../../../store/actions';
import { CodeType } from '../../../types/types';
import { Checkbox, License, Domain, Status } from './components';
import { Container, StaledBtn } from './style';

type CodeCardProps = {
  codeInfo: CodeType;
  addCheckedCode: (code: CodeType) => void;
  removeCheckedCode: (code: CodeType) => void;
};

const CodeCard: React.FC<CodeCardProps> = ({ codeInfo, addCheckedCode, removeCheckedCode }) => {
  const dispatch = useDispatch();

  const handleActivate = () => {
    dispatch(activateCodeAction(codeInfo.code));
  };

  // console.log('codeInfo ', codeInfo);

  return (
    <Container>
      <Checkbox
        codeInfo={codeInfo}
        addCheckedCode={addCheckedCode}
        removeCheckedCode={removeCheckedCode}
        disabled={codeInfo.status !== 'HOLD'}
      />
      <License license={codeInfo.code} />
      <Domain domain={codeInfo.origin} />
      {codeInfo.status === 'INACTIVE' && (
        <StaledBtn onClick={handleActivate} mode="secondary">
          Activate
        </StaledBtn>
      )}
      <Status status={codeInfo.status} />
    </Container>
  );
};

export default CodeCard;
