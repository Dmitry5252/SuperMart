import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 1.25rem;
  width: 35%;
  margin-left: 1rem;

  @media screen and (max-width: 880px) {
    width: 100%;
    margin-left: 0;
  }
`;

const AdImageLink = styled.a`
  height: 49%;
`;

const AdImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const AdImages: FC = () => {
  return (
    <Wrapper>
      <Link href="/items/Console/Xbox%20Series%20X" passHref>
        <AdImageLink>
          <AdImage src="images/XboxSeriesX.bmp" />
        </AdImageLink>
      </Link>
      <Link href="/items/Tablet/Galaxy Tab S7 FE" passHref>
        <AdImageLink>
          <AdImage src="images/Tablet2.bmp" />
        </AdImageLink>
      </Link>
    </Wrapper>
  );
};

export default AdImages;
