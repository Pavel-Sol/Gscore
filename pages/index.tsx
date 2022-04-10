import styled from 'styled-components';
import React, { useEffect } from 'react';
import { HomeCard } from '../components';
import Link from 'next/link';
import { LS } from '../store/services';
import { useDispatch } from 'react-redux';
import { reset } from '../store/reducers';
import { authMeAction, getProductsAction } from '../store/actions';
import axios from 'axios';
import { ProductType } from '../types/types';


export const getServerSideProps = async () => {
  const response = await axios.get('https://gscore-back.herokuapp.com/api/products');

  if (response.data) {
    return {
      props: { products: response.data },
    };
  }
};

type HomeProps = {
  products: ProductType[];
};

const Home: React.FC<HomeProps> = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = LS.getToken();
    if (!token) {
      dispatch(reset());
    } else {
      dispatch(authMeAction());
    }
  }, []);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <>
      <Title>Get started with Gscore today!</Title>
      <HomeCardList>
        {products.length > 0 &&
          products.map((el, index) => {
            return <HomeCard key={el.id} product={el} index={index} />;
          })}
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
