import { FC } from "react";
import Laptop from "../../model/laptop";
import styled from "styled-components";
import Link from "next/link";

interface IProps {
  item: Laptop;
  category: string;
}

const Bar = styled.div`
  height: 4.3125rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 0.0625rem solid #e8e8e8;
`;

const BreadCrumps = styled.div`
  color: #444444;
  font-size: 0.75rem;
`;

const ModelLink = styled.a`
  color: #888888;
  cursor: pointer;
`;

const BreadCrumpsBar: FC<IProps> = ({ item, category }) => {
  return (
    <Bar>
      <BreadCrumps>
        <Link href="/">
          <a>HOME</a>
        </Link>{" "}
        /{" "}
        <Link href={`/items/${category}`}>
          <a>{category.toUpperCase()}</a>
        </Link>{" "}
        /{" "}
        <Link href={`/items/${category}/${item.model}`}>
          <ModelLink>{item.model}</ModelLink>
        </Link>
      </BreadCrumps>
    </Bar>
  );
};

export default BreadCrumpsBar;
