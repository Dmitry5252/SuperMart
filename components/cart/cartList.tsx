import { FC, useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context";
import Axios, { baseURL } from "../../config/axiosInstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { changeInCart, deleteFromCart } from "../../context/actions/actionCreators";
import { ICartItem } from "../../context/reducers/cartReducer";
import SetCountInput from "../../components/setCountInput";

const CartItems = styled.ul`
  padding: 0;
  margin: 0;
`;

const CartHeader = styled.div`
  font-family: Raleway;
  font-weight: 600;
  font-size: 0.875rem;
  color: #222222;
  max-width: 100%;
  background-color: #f8f8f8;
  border: 0.0625rem solid #ededed;
  height: 3.5625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3%;
  padding-left: 2.5%;

  @media screen and (max-width: 880px) {
    font-size: 0.6rem;
  }

  .product {
    width: 50%;

    @media screen and (max-width: 880px) {
      width: 20%;
    }
  }

  .price {
    width: 12.6%;
  }

  .quantity {
    width: 15%;
  }

  .total {
    width: 18%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .empty {
    width: 1.625rem;
  }
`;

const CartItem = styled(CartHeader)`
  font-family: Roboto;
  font-weight: 500;
  border-top: none;
  height: 6.25rem;

  @media screen and (max-width: 880px) {
    padding: 0 2%;
    font-size: 0.875rem;
  }

  .product {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 880px) {
      justify-content: center;
      flex-direction: column;
      width: 20%;
      padding: 0.5rem 0;
      text-align: center;
    }

    span {
      @media screen and (max-width: 880px) {
        height: 2rem;
        width: 100%;
        margin-top: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }

  img {
    width: 3.4375rem;
    height: 3.75rem;
    object-fit: contain;
    margin-right: 1.3125rem;

    @media screen and (max-width: 880px) {
      width: 2rem;
      height: 2rem;
      margin: 0;
    }
  }
`;

const CancelButton = styled.button`
  width: 1.625rem;
  height: 1.625rem;
  color: #fc4646;
  background: none;
  border: 0.0625rem solid #e6e6e6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CartList: FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const changeItemInCart = async (item: ICartItem, count: number) => {
    const { data } = await Axios.put("/cart", { _id: item.item._id, count });
    dispatch(changeInCart(data));
  };

  return (
    <>
      <CartHeader>
        <span className="product">PRODUCT</span>
        <span className="price">PRICE</span>
        <span className="quantity">QUANTITY</span>
        <span className="total">TOTAL</span>
        <div className="empty"></div>
      </CartHeader>
      <CartItems>
        {state.cart.map((e) => (
          <CartItem key={e.item._id}>
            <Link href={`items/${e.item.category}/${e.item.model}`}>
              <a className="product">
                <img alt="item" src={`${baseURL}item/${e.item.model}/0`} />
                <span>
                  {e.item.brand} {e.item.model}
                </span>
              </a>
            </Link>
            <span className="price">${e.item.price}</span>
            <span className="quantity">
              <SetCountInput
                count={e.count}
                changeHandler={(count) => changeItemInCart(e, count)}
              />
            </span>
            <span className="total">${e.count * e.item.price}</span>
            <CancelButton
              onClick={async () => {
                await Axios.delete(`/cart/${e.item._id}`);
                dispatch(deleteFromCart(e.item._id));
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </CancelButton>
          </CartItem>
        ))}
      </CartItems>
    </>
  );
};

export default CartList;
