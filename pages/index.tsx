import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import AdImages from "../components/Home/adImages";
import AdBar from "../components/Home/adSlider";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="Buy anything!" content="Any Goods!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <AdBar />
        <AdImages />
      </Wrapper>
    </>
  );
};

export default Home;
