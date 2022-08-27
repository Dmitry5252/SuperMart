import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { baseURL } from "../../config/axiosInstance";
import ItemType from "../../model";

const ItemListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 13.1875rem);
  justify-content: center;
  margin: 3rem 0;
`;

const ItemA = styled.a`
  width: 13.1875rem;
  cursor: pointer;
  border: 0.0625rem solid #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  :hover {
    box-shadow: 0 0 0.6875rem #000000;
  }
`;

const ItemImage = styled.img`
  width: 80%;
  height: 8rem;
  object-fit: contain;
`;

const ItemName = styled.h2`
  font-family: Roboto;
  font-weight: 400;
  color: #444444;
  font-size: 0.875rem;
  margin-top: 3.8125rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
`;

const ItemPrice = styled.div`
  text-align: center;
  font-family: Roboto;
  font-weight: 500;
  color: #222222;
  font-size: 0.875rem;
`;

const Item: FC<{ item: ItemType }> = ({ item }) => {
  return (
    <Link href={`/items/${item.__t}/${item.model}`} passHref>
      <ItemA>
        <ItemImage src={`${baseURL}item/${item.model}/0`} />
        <ItemName>
          {item.brand} {item.model}
        </ItemName>
        <ItemPrice>${item.price}</ItemPrice>
      </ItemA>
    </Link>
  );
};

const ItemList: FC<{ items: ItemType[] }> = ({ items }) => {
  return (
    <ItemListDiv>
      {items.map((item) => (
        <Item key={item._id} item={item}></Item>
      ))}
    </ItemListDiv>
  );
};

export default ItemList;
