import React from 'react';
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
        <Content>Content</Content>
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

export default Login;