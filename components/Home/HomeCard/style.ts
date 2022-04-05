import styled from 'styled-components';
import { Button } from '../../ui';

export const Container = styled.div`
  flex: 0 1 33.3%;
  padding: 10px;
  text-align: center;

  &:nth-child(2) {
    transform: translateY(-40px);
    @media (max-width: 1100px) {
      transform: translateY(0);
    }
  }
`;

export const Content = styled('div')<{
  bg?: string;
}>`
  max-width: 404px;
  background-color: ${(props) => props.bg || 'rgba(39, 39, 39, 1)'};
  padding: 42px;
  border-radius: 12px;

  @media (max-width: 450px) {
    padding: 15px;
  }
`;

export const Heading = styled.div`
  border-bottom: 1px solid rgba(150, 150, 150, 1);
`;

export const Price = styled.h2`
  font-weight: 700;
  font-size: 3.3rem;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
`;
export const Desc = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
`;
export const Bottom = styled.div`
  margin-top: 20px;
`;

export const BottomList = styled.ul``;
export const Item = styled.li`
  display: flex;
  text-align: left;
  margin: 20px 0px;
`;
export const ItemText = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0;
  margin-left: 15px;
`;

export const StyledBtn = styled(Button)<{
  color?: string;
}>`
  width: 100%;
  background-color: #fff;
  color: ${(props) => props.color || '#181818'};
  font-weight: 700;

  &:hover {
    background-color: #ebe4e3;
  }
`;
