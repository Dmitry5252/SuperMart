import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Axios from "axios";
import ItemType from "../../model";
import { ParsedUrlQuery } from "querystring";
import ItemList from "../../components/itemList";

const Item: NextPage<IProps> = ({ items }) => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="Buy anything!" content="Any Goods!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ItemList items={items} />
    </>
  );
};

export default Item;

interface IProps {
  items: ItemType[];
}

interface IQuery extends ParsedUrlQuery {
  search: string;
}

export const getServerSideProps: GetServerSideProps<IProps> = async (context) => {
  const { search } = context.query as IQuery;
  const { data } = await Axios.get(
    `${process.env.baseURL}/items${search ? `?search=${search}` : ""}`
  );
  return { props: { items: data } };
};
