import styled from "styled-components";
import { FC } from "react";

const CountInputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: fit-content;
`;

const CountInput = styled.input.attrs((props) => ({ type: "number" }))`
  font-family: Roboto;
  font-weight: 500;
  color: #222222;
  font-size: 1rem;
  width: 3.375rem;
  height: 3.125rem;
  text-align: center;
  border: 0.0625rem solid #e5e5e5;
  outline: none;
  -moz-appearance: textfield;
  appearance: textfield;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  @media screen and (max-width: 880px) {
    width: 2rem;
  }
`;

const Buttons = styled.div`
  height: 3.125rem;
  width: 1.625rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  height: 50%;
  margin: 0;
  border: 0.0625rem solid #e5e5e5;
  font-family: Roboto;
  font-size: 1.125rem;
  color: #999999;
  background: none;
  cursor: pointer;
`;

const SetCountInput: FC<{ count: number; changeHandler: (value: number) => any }> = ({
  count,
  changeHandler,
}) => {
  const validator = (value: string | number) => {
    const number = Number(value);
    if (Number.isNaN(number) || number < 1 || !Number.isSafeInteger(number)) {
      changeHandler(count);
    } else {
      changeHandler(number);
    }
  };
  return (
    <CountInputWrapper>
      <CountInput value={count} onChange={(e) => validator(e.target.value)} />
      <Buttons>
        <Button onClick={() => validator(+count + 1)}>+</Button>
        <Button onClick={() => validator(+count - 1)}>-</Button>
      </Buttons>
    </CountInputWrapper>
  );
};

export default SetCountInput;
