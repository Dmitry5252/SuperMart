import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #408de4;
  color: #fff;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 0.75rem;
`;

const Bottom = styled.div<IMainHeader>`
  max-width: 1140px;
  width: 100%;
  height: 3.375rem;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  button {
    background: none;
    border: none;
    font-size: 1rem;
    margin-left: 1rem;
    color: #fff;
    padding: 0;
    cursor: pointer;
    display: none;
    @media screen and (max-width: 880px) {
      display: block;
    }
  }
`;

const SiteCategories = styled.div<{ show: Boolean }>`
  width: 100%;
  padding-left: 1.5625rem;
  font-size: 0.75rem;
  color: #eeeeee;
  font-family: Raleway;
  font-weight: 600;

  @media screen and (max-width: 880px) {
    display: none;
    ${({ show }) => show && "display: flex;"}
    position: absolute;
    z-index: 999;
    top: 3.375rem;
    height: 10rem;
    justify-content: space-between;
    flex-direction: column;
    background-color: #333333;
    width: 10rem;
    padding: 0 0 1rem 0;
  }
`;

const Category = styled.a`
  background: none;
  border: none;
  font-size: 0.75rem;
  color: #eeeeee;
  font-family: Raleway;
  font-weight: 600;
  padding: 0 0.9375rem;
  cursor: pointer;
`;

const Phone = styled.a`
  font-weight: 400;
  color: #bbbbbb;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-right: 0.625rem;
`;

const Number = styled.div`
  background-color: #ffd200;
  color: #333333;
  margin-left: 0.3125rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.0625rem;
`;

interface IMainHeader {
  white?: boolean;
}

const MainHeader: FC<IMainHeader> = ({ white }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => setShow(false)), [];
  });
  return (
    <BottomWrapper>
      <Bottom white={white}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <SiteCategories show={show}>
          <Link href="/items" passHref>
            <Category>SHOP</Category>
          </Link>
          <Link href="/items/Laptop" passHref>
            <Category>LAPTOPS</Category>
          </Link>
          <Link href="/items/Smartphone" passHref>
            <Category>SMARTPHONES</Category>
          </Link>
          <Link href="/items/Tablet" passHref>
            <Category>TABLETS</Category>
          </Link>
          <Link href="/items/Console" passHref>
            <Category>GAMING CONSOLES</Category>
          </Link>
          <Link href="/items/Headphones" passHref>
            <Category>HEADPHONES</Category>
          </Link>
        </SiteCategories>
        <Phone href="tel: 1-800-777-7889">
          CALL US FREE:<Number>1-800-777-7889</Number>
        </Phone>
      </Bottom>
    </BottomWrapper>
  );
};

export default MainHeader;
