import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

import logoPic from "../../public/images/Logo.png";
import logoBluePic from "../../public/images/LogoBlue.png";

const LogoDiv = styled.a`
  font-family: "Raleway";
  font-weight: 800;
  font-size: 1.625rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
`;

const CompanyName = styled.div<ILogo>`
  margin-left: 0.3125rem;
  ${({ white }) => (white ? "color: #191a1c;" : "color: #fff;")}

  @media screen and (max-width: 880px) {
    font-size: 0;
  }
`;

interface ILogo {
  white?: boolean;
}

const Logo: FC<ILogo> = ({ white }) => {
  return (
    <Link href="/" passHref>
      <LogoDiv>
        <Image src={white ? logoBluePic : logoPic} alt="Logo" />
        <CompanyName white={white}>SUPERMART</CompanyName>
      </LogoDiv>
    </Link>
  );
};

export default Logo;
