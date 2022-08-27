import { FC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const RadioButtonDiv = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid #cdcdcd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioButtonDivInner = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #232323;
  border-radius: 50%;
  display: none;
`;

const RadioButtonInput = styled.input.attrs(() => ({
  type: "radio",
}))`
  display: none;

  &:checked + ${RadioButtonDiv} {
    ${RadioButtonDivInner} {
      display: block;
    }
  }
`;

const RadioButtonLabel = styled.label`
  cursor: pointer;

  :hover {
    ${RadioButtonDiv} {
      background-color: #ccc;
    }
  }
`;

const RadioButton: FC<{
  name: string;
  value: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  id: string;
  className?: string;
}> = ({ name, value, state, setState, id, className }) => (
  <RadioButtonLabel className={className}>
    <RadioButtonInput
      name={name}
      value={value}
      checked={state == value}
      onChange={(e) => setState(e.target.value)}
      id={id}
    />
    <RadioButtonDiv>
      <RadioButtonDivInner />
    </RadioButtonDiv>
  </RadioButtonLabel>
);

export default RadioButton;
