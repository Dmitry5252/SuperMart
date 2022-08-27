import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext, useState } from "react";
import styled from "styled-components";
import IItem from "../../../model/";
import AppContext from "../../../context";
import Axios from "../../../config/axiosInstance";
import item from "../../../model";
import prepareTechDetails from "./prepareTechDetails";
import { addToCart } from "../../../context/actions/actionCreators";
import SetCountInput from "../../setCountInput";

const InfoWrapper = styled.div`
  margin-left: 3rem;
  h1 {
    margin: 0;
    font-family: Raleway;
    font-weight: 600;
  }

  @media screen and (max-width: 880px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const Price = styled.div`
  color: #222222;
  font-size: 1.25rem;
  font-family: Poppins;
  font-weight: 500;
  margin: 1rem 0;
`;

const TechDetails = styled.article`
  font-family: Roboto;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const AddToCartButton = styled.button`
  font-size: 0.83rem;
  margin-top: 1rem;
  margin-right: 1rem;
  width: 12.3125rem;
  height: 3.125rem;
  background-color: #222222;
  border: none;
  font-family: Raleway;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  padding-left: 1.25rem;
  cursor: pointer;

  :hover {
    background-color: #454545;

    svg {
      border-color: #777777;
    }
  }

  svg {
    font-size: 0.9375rem;
    padding: 1.09375rem;
    border-left: 0.0625rem solid #424242;
  }
`;

const AddToCartWrapper = styled.div`
  @media screen and (max-width: 880px) {
    display: inline-flex;
    flex-direction: row-reverse;
  }
`;

const Info: FC<{ item: IItem }> = ({ item }) => {
  const { dispatch } = useContext(AppContext);

  const addItemToCart = async (item: item, count: number) => {
    const { data } = await Axios.post("/cart", { _id: item._id, count });
    dispatch(addToCart(data));
  };

  const [count, setCount] = useState(1);
  return (
    <InfoWrapper>
      <h1>{item.model}</h1>
      <Price>${item.price}</Price>
      <TechDetails>{prepareTechDetails(item)}</TechDetails>
      <AddToCartWrapper>
        <SetCountInput count={count} changeHandler={(value) => setCount(value)} />
        <AddToCartButton
          onClick={() => {
            addItemToCart(item, count);
          }}
        >
          ADD TO CART
          <FontAwesomeIcon icon={faCartShopping} />
        </AddToCartButton>
      </AddToCartWrapper>
    </InfoWrapper>
  );
};

export default Info;
