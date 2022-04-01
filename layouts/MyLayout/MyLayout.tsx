import { Container, Main } from './style';
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

type MyLayoutProps = {
  children?: React.ReactNode;
};

const MyLayout: React.FC<MyLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </>
  );
};

export default MyLayout;
