import Link from "next/link";
import { FC, useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context";

const TopWrapper = styled.div<ITopBar>`
  width: 100%;
  padding: 0 1rem;

  color: ${({ white }) => (white ? "#777777" : "#fff")};

  background-color: ${({ white }) => (white ? "#fafafa" : "#3b83d4")};

  ${({ white }) => white && "border-bottom: 1px solid #eeeeee"}
`;

const Top = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.625rem;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 0.75rem;
`;

const DownloadLink = styled.a<ITopBar>`
  width: 6.6875rem;
  height: 1.5rem;
  background-color: ${({ white }) => (white ? "#e6e6e6" : "#3576be")};
  color: ${({ white }) => (white ? "#  555555" : "#fff")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.0625rem;
`;

interface ITopBar {
  white?: boolean;
}

const TopBar: FC<ITopBar> = ({ white }) => {
  const { state } = useContext(AppContext);
  return (
    <TopWrapper white={white}>
      <Top>
        {state.loggedIn ? (
          <div></div>
        ) : (
          <Link href={"/auth"}>
            <a>Login / Signup</a>
          </Link>
        )}
        <Link href={"/"} passHref>
          <DownloadLink white={white}>DOWNLOAD APP</DownloadLink>
        </Link>
      </Top>
    </TopWrapper>
  );
};

export default TopBar;
