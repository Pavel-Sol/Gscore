import styled from 'styled-components';
import React from 'react';
import { HomeCard } from '../components/HomeCard';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Title>Get started with Gscore today!</Title>
      <HomeCardList>
        <HomeCard price="77" title="Single site license" />
        <HomeCard bg="rgba(252, 88, 66, 1)" price="117" title="3 Site license" />
        <HomeCard price="167" title="10 Site license" />
      </HomeCardList>
      <ContactUs>
        <p>Have more than 10 sites?</p>
        <Link href="#">
          <StyledLink>Contact us</StyledLink>
        </Link>
      </ContactUs>
    </>
  );
};

const Title = styled.h1`
  text-align: center;
  font-size: 2.75rem;
  margin-bottom: 80px;
  @media (max-width: 450px) {
    font-size: 1.7rem;
    margin-bottom: 40px;
  }
`;
const HomeCardList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0px auto;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ContactUs = styled.div`
  margin: 20px 0px 55px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled.a`
  color: #fc5842;
  text-decoration: underline;
`;

export default Home;
