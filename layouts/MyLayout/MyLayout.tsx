import { Container, Main, App } from './style';
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

type MyLayoutProps = {
  children?: React.ReactNode;
};

const MyLayout: React.FC<MyLayoutProps> = ({ children }) => {
  return (
    <App>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </App>
  );
};

export default MyLayout;
