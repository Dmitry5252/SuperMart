import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import LoginForm from "../../components/auth/loginForm";
import RegisterForm from "../../components/auth/registerForm";
import { useContext } from "react";
import AppContext from "../../context";

const Title = styled.h2`
  font-size: 1.375rem;
  font-family: Raleway;
  font-weight: 800;
  margin: 3.75rem 0 3.1875rem 0;
`;

const FormsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const Auth: NextPage = () => {
  const { useCheckAuthentification } = useContext(AppContext);
  useCheckAuthentification(true);
  return (
    <>
      <Head>
        <title>Authorization</title>
        <meta name="Buy anything!" content="Any Goods!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>MY ACCOUNT</Title>
      <FormsWrapper>
        <LoginForm />
        <RegisterForm />
      </FormsWrapper>
    </>
  );
};

export default Auth;
