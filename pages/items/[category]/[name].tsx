import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Axios from "axios";
import Laptop from "../../../model/laptop";
import BreadCrumpsBar from "../../../components/Item/breadCrumpsBar";
import Photos from "../../../components/Item/photos";
import Info from "../../../components/Item/info";
import IItem from "../../../model/";

const Main = styled.main`
  width: 100%;
  margin-top: 2.4375rem;
  margin-bottom: 2rem;
  display: flex;

  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`;

const Item: NextPage<IProps> = ({ item, category }) => {
  return (
    <>
      <Head>
        <title>{item.model}</title>
        <meta name="Buy anything!" content="Any Goods!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BreadCrumpsBar category={category} item={item} />
      <Main>
        <Photos item={item} />
        <Info item={item} />
      </Main>
    </>
  );
};

export default Item;

interface IProps {
  item: Laptop;
  category: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items: { data: IItem[] } = await Axios.get(`${process.env.baseURL}/items/`);

  const paths = items.data.map((item) => ({ params: { category: item.__t, name: item.model } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
  const { data } = await Axios.get(`${process.env.baseURL}/item/${context.params!.name}`);
  return { props: { item: data, category: context.params!.category as string } };
};
