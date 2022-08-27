import { Dispatch, FC, useEffect, useState, SetStateAction } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IDropDownSelector {
  white?: boolean;
  category: "Laptop" | "Smartphone" | "Tablet" | "Console" | "Headphones" | null;
  setCategory: Dispatch<
    SetStateAction<"Laptop" | "Smartphone" | "Tablet" | "Console" | "Headphones" | null>
  >;
}

interface ISelector {
  white?: boolean;
}

const Selector = styled.button<ISelector>`
  font-family: "Roboto";
  font-size: 0.8125rem;
  background: #fff;
  height: 2.875rem;
  width: 8.625rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem 0 0.875rem;
  ${({ white }) => white && "border: 1px solid #e8e8e8;"}
  flex-shrink: 0;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 880px) {
    span {
      font-size: 0;
    }
    width: auto;
    padding: 1rem;
  }
`;

const Option = styled(Selector)`
  border: 1px solid #e8e8e8;
  width: 8.625rem;
  :hover {
    background: #dedede;
  }
`;

const CategoryList = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 100%;
  left: -1px;
  z-index: 999;
`;

const DropDownSelector: FC<IDropDownSelector> = ({ white, category, setCategory }) => {
  const [showList, setShowList] = useState(false);

  useEffect(() => window.addEventListener("click", () => setShowList(false)), []);

  return (
    <Selector
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setShowList(!showList);
      }}
      white={white}
    >
      <span>{category ? `${category}s` : "All Categories"}</span>
      <FontAwesomeIcon icon={faAngleDown} />
      {showList && (
        <CategoryList>
          <Option onClick={() => setCategory(null)}>All Categories</Option>
          <Option onClick={() => setCategory("Laptop")}>Laptops</Option>
          <Option onClick={() => setCategory("Smartphone")}>Smartphones</Option>
          <Option onClick={() => setCategory("Tablet")}>Tablets</Option>
          <Option onClick={() => setCategory("Console")}>Consoles</Option>
          <Option onClick={() => setCategory("Headphones")}>Headphones</Option>
        </CategoryList>
      )}
    </Selector>
  );
};

export default DropDownSelector;
