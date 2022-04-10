import styled from 'styled-components';

export const ModalPopup = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  background-color: #ebecf0;
  min-width: 100px;
  max-width: 500px;
  position: relative;
  border-radius: 5px;
`;
export const ModalContent = styled.div`
  padding: 50px;
  max-height: 600px;
  min-width: 100px;
  max-width: 500px;
  overflow-y: auto;
`;

export const BtnClose = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(57, 57, 57, 1);
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgb(94, 93, 93);
  }
`;
