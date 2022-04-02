import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Facebook, LinkedIn, Twitter } from '../icons';
import {
  StyledFooter,
  Container,
  Heading,
  LogoWrap,
  HeadingDesc,
  Bottom,
  Policy,
  PolicyText,
  StyledLink,
  Social,
  SocialItem,
} from './style';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Heading>
          <LogoWrap>
            <Image src="/img/Logo.png" layout="fill" objectFit="cover" />
          </LogoWrap>
          <HeadingDesc>Ut enim ad minim veniam quis nostrud exercitation ea commodo</HeadingDesc>
        </Heading>
        <Bottom>
          <Policy>
            <PolicyText>Copyright © 2022 GScore</PolicyText>
            <PolicyText>All Rights Reserved</PolicyText>
            <Link href="#">
              <StyledLink>Cookies</StyledLink>
            </Link>
            <Link href="#">
              <StyledLink>Privacy Policy</StyledLink>
            </Link>
          </Policy>
          <Social>
            <SocialItem>
              <Link href="#">
                <a target="_blank">
                  <Facebook />
                </a>
              </Link>
            </SocialItem>
            <SocialItem>
              <Link href="#">
                <a target="_blank">
                  <Twitter />
                </a>
              </Link>
            </SocialItem>
            <SocialItem>
              <Link href="#">
                <a target="_blank">
                  <LinkedIn />
                </a>
              </Link>
            </SocialItem>
          </Social>
        </Bottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
