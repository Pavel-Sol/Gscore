import styled from 'styled-components';

export const Container = styled.div``;

export const SliderContainer = styled.div`
  width: 100%;
  height: 334px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 268px;
  }
`;

export const SliderRow = styled.div`
  display: flex;
  transition: all 0.3s ease;
`;

export const Item = styled.div`
  width: 650px;
  padding: 0px 30px 0px 0px;
`;
