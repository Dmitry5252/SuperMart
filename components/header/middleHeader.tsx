import { FC } from "react";
import styled from "styled-components";
import CartButton from "./cartButton";
import Logo from "./logo";
import SearchBar from "./searchBar";

const MiddleWrapper = styled.div<{ white?: Boolean }>`
  width: 100%;
  padding: 0 1rem;
  background-color: ${({ white }) => (white ? "#fff" : "#408de4")};
  display: flex;
  justify-content: center;
`;

const Middle = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 6.625rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 1.6875rem;
`;

const MiddleHeader: FC<{ white?: boolean }> = ({ white }) => {
  return (
    <MiddleWrapper white={white}>
      <Middle>
        <Logo white={white} />
        <SearchBar white={white} />
        <CartButton white={white} />
      </Middle>
    </MiddleWrapper>
  );
};

export default MiddleHeader;
