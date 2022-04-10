import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  max-width: 350px;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseBtn = styled.button`
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: rgba(57, 57, 57, 1);
  border: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgb(44, 43, 43);
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
`;

export const SubTitle = styled.p`
  margin: 0px 0px 30px 0px;
`;
