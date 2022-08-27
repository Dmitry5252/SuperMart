import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useContext, useState } from "react";
import AppContext from "../../context";
import CartList from "../../components/cart/cartList";
import Shipping from "../../components/cart/shipping";

const Title = styled.h1`
  font-family: Raleway;
  font-weight: 800;
  margin: 3.75rem 0 1.875rem 0;
`;

const Ordered = styled.div`
  height: calc(100vh - 17.625rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-align: center;
`;

const Cart: NextPage = () => {
  const { useCheckAuthentification } = useContext(AppContext);
  const [ordered, setOrdered] = useState(false);

  useCheckAuthentification();

  if (ordered) {
    return <Ordered>Your order will be processed soon. We`ll contact with you.</Ordered>;
  }

  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="Buy anything!" content="Any Goods!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>YOUR CART</Title>
      <CartList />
      <Shipping setOrdered={setOrdered} />
    </>
  );
};

export default Cart;
