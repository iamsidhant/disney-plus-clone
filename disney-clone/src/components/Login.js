import React from 'react';
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
              Get Premier Access to Dune 2 for an additional fee
              with a Disney+ subscription. As of 05/26/24, the price of Disney+
              and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
          </CTA>
          <BgImage />
        </Content>
    </Container>
  )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.section`
    margin-bottom: 10vw;
    width: 100%;
    min-height: 100vh;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: f9f9f9;
  background-color: #0063e5;
  width: 100%;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover{
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  color: hsla(0, 0%, 95.3%, 1);
  line-height: 1.5;
  letter-spacing: 1.5px;
  margin: 0 0 24px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;