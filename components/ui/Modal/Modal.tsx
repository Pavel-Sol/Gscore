import React from 'react';
import { CloseIcon } from 'components';
import { BtnClose, ModalContent, ModalPopup, ModalWrapper } from './style';

type ModalPropsType = {
  visible: boolean;
  children: React.ReactNode;
  oneCloseModal: () => void;
};

const Modal: React.FC<ModalPropsType> = ({ children, visible, oneCloseModal }: ModalPropsType) => {
  if (!visible) {
    return null;
  }

  return (
    <ModalPopup onClick={oneCloseModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <BtnClose onClick={oneCloseModal}>
          <CloseIcon />
        </BtnClose>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </ModalPopup>
  );
};

export default Modal;
