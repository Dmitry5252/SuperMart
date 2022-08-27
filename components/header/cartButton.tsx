import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context";
import Link from "next/link";

const StyledLink = styled.a<ICartButton>`
  height: 2.875rem;
  border: none;
  outline: none;
  border-radius: 0.0625rem;
  background: #fff;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ white }) => white && "border: 1px solid #e8e8e8;"}

  svg {
    width: 2.75rem;
    font-size: 1.1875rem;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  width: 6.1875rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.75rem;

  @media screen and (max-width: 880px) {
    display: none;
  }
`;

const Splitter = styled.div`
  width: 0.0625rem;
  height: 100%;
  background-color: #e5e5e5;
  border-top: 0.0625rem solid #f3f3f3;
  border-bottom: 0.0625rem solid #f3f3f3;
`;

const ItemsCount = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  color: #408de4;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface ICartButton {
  white?: boolean;
}

const CartButton: FC<ICartButton> = ({ white }) => {
  const { state } = useContext(AppContext);

  return (
    <Link href="/cart" passHref>
      <StyledLink white={white}>
        <FontAwesomeIcon icon={faBagShopping} />
        <Splitter />
        <ItemsWrapper>
          <ItemsCount>
            {state.cart.reduce((acc: number, curr) => acc + curr.count, 0)} Items:&nbsp;
          </ItemsCount>
          <Price>
            ${state.cart.reduce((acc: number, curr) => acc + curr.item.price * curr.count, 0)}
          </Price>
        </ItemsWrapper>
      </StyledLink>
    </Link>
  );
};

export default CartButton;
