import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import styled from "styled-components";
import AppContext from "../../context";
import RadioButton from "./RadioButton";
import Axios from "../../config/axiosInstance";
import { setCart } from "../../context/actions/actionCreators";

const Wrapper = styled.div`
  margin-top: 5.1875rem;
  margin-left: 50%;

  @media screen and (max-width: 880px) {
    margin-top: 2rem;
    margin-left: 0;
  }
`;

const Title = styled.h2`
  font-family: "Poppins";
  font-weight: 600;
  color: #222222;
`;

const ShippingTable = styled.table`
  width: 100%;
  text-align: left;
  background-color: #fcfcfc;
  font-family: Raleway;
  font-weight: 600;
  font-size: 0.875rem;
  color: #222222;
  border-collapse: collapse;

  .tbody {
    width: 100%;
  }

  th {
    height: 3.3125rem;
    border: 0.0625rem solid #e8e8e8;
    padding-left: 1.1875rem;

    @media screen and (max-width: 880px) {
      padding-left: 3%;
    }
  }

  .subtotal {
    width: 50%;
    margin: 0;
  }

  .subtotalValue {
    font-family: Roboto;
    font-weight: 500;
  }

  .totalValue {
    font-family: Roboto;
    font-weight: 700;
    font-size: 1rem;
  }
`;

const RadioWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.25rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 880px) {
    height: 80%;
    line-height: 140%;
  }
`;

const StyledRadioButton = styled(RadioButton)``;

const RadioButtonWrapper = styled.div`
  display: flex;

  ${StyledRadioButton} {
    margin-right: 0.75rem;
  }
`;

const RadioButtonLabel = styled.label`
  color: #777777;
  font-family: Roboto;
  font-weight: 400;
  cursor: pointer;
`;

const ShippingPrice = styled.span`
  color: #222222;
  font-weight: 500;
`;

const AdressInput = styled.input`
  width: 82%;
  height: 2.5rem;
  border: 0.0625rem solid #e8e8e8;
  border-radius: 0.125rem;
  outline: none;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.875rem;
  padding-left: 9%;
  margin-bottom: 1rem;
  @media screen and (max-width: 880px) {
    width: 91%;
  }
`;

const Error = styled.div`
  font-family: Roboto;
  margin-bottom: 1rem;
  color: #fc4242;
  font-weight: 600;
`;

const OrderButton = styled.button`
  width: 100%;
  height: 3.75rem;
  margin-top: 1.5625rem;
  background-color: #408de4;
  border: none;
  border-radius: 0.125rem;
  color: #fff;
  font-family: Raleway;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background-color: #63a9fa;
  }
`;

const OrderButtonWrapper = styled.div`
  margin-bottom: 1rem;

  ${Error} {
    margin-top: 1rem;
  }
`;

const Shipping: FC<{ setOrdered: Dispatch<SetStateAction<boolean>> }> = ({ setOrdered }) => {
  const { state, dispatch } = useContext(AppContext);
  const [shipping, setShipping] = useState("free");
  const [adress, setAdress] = useState("");
  const [showError, setShowError] = useState(false);
  const subtotal = state.cart.reduce((acc, curr) => acc + curr.item.price * curr.count, 0);
  const total = shipping == "express" ? subtotal + 10 : subtotal;
  return (
    <Wrapper>
      <Title>CART TOTALS</Title>
      <ShippingTable>
        <tbody>
          <tr>
            <th className="subtotal">SUBTOTAL</th>
            <th className="subtotalValue">${subtotal}</th>
          </tr>
          <tr>
            <th>SHIPPING</th>
            <th>
              <RadioWrapper>
                <RadioButtonWrapper>
                  <StyledRadioButton
                    name="shipping"
                    value="free"
                    state={shipping}
                    setState={setShipping}
                    id="freeShipping"
                  />
                  <RadioButtonLabel htmlFor="freeShipping">Free shipping</RadioButtonLabel>
                </RadioButtonWrapper>
                <RadioButtonWrapper>
                  <StyledRadioButton
                    name="shipping"
                    value="express"
                    state={shipping}
                    setState={setShipping}
                    id="expressShipping"
                  />
                  <RadioButtonLabel htmlFor="expressShipping">
                    Express shipping: &nbsp;<ShippingPrice>$10.00</ShippingPrice>
                  </RadioButtonLabel>
                </RadioButtonWrapper>
              </RadioWrapper>
              <AdressInput onChange={(e) => setAdress(e.target.value)} placeholder="Adress" />
              {(showError && adress.length == 0 && <Error>Provide a valid adress</Error>) ||
                (showError && adress.length < 3 && (
                  <Error>Adress length cannot be less than 3</Error>
                ))}
            </th>
          </tr>
          <tr>
            <th>TOTAL</th>
            <th className="totalValue">${total}</th>
          </tr>
        </tbody>
      </ShippingTable>
      <OrderButtonWrapper>
        <OrderButton
          onClick={() => {
            setShowError(true);
            if (adress.length >= 3 && state.cart.length > 0) {
              Axios.post("/order", { shipping, adress }).then(() => {
                dispatch(setCart([]));
                setOrdered(true);
              });
            }
          }}
        >
          ORDER
        </OrderButton>
        {showError && state.cart.length == 0 && (
          <Error>You should have at least 1 item in cart</Error>
        )}
      </OrderButtonWrapper>
    </Wrapper>
  );
};

export default Shipping;
