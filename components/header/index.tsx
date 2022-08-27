import { FC } from "react";
import MainHeader from "./bottomHeader";
import MiddleHeader from "./middleHeader";
import TopHeader from "./topHeader";

interface IHeader {
  white?: boolean;
}

const Header: FC<IHeader> = ({ white }) => {
  return (
    <header>
      <TopHeader white={white} />
      <MiddleHeader white={white} />
      <MainHeader white={white} />
    </header>
  );
};

export default Header;
