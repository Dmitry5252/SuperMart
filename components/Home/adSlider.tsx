import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const AdImageLink = styled.a`
  flex-shrink: 0;
  width: 100%;
  margin-right: 1rem;
`;

const AdImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  overflow: hidden;
  margin-top: 1.25rem;
  width: 70%;
  position: relative;

  @media screen and (max-width: 880px) {
    width: 100%;
  }
`;

interface IInnerProps {
  image?: 1 | 2 | 3;
  active?: boolean;
}

const Inner = styled.div<IInnerProps>`
  display: flex;
  position: relative;
  right: 0;
  transition: right 2s linear;
  right: ${({ image }) => {
    switch (image) {
      case 1:
        return "0";
      case 2:
        return "calc(100% + 1rem);";
      case 3:
        return "calc(200% + 2rem);";
    }
  }};
  height: 100%;
`;

const ChooseImageButton = styled.button<IInnerProps>`
  height: 0.4375rem;
  width: 0.4375rem;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: ${({ active }) => {
    return active ? "#947b7b" : "";
  }};
  cursor: pointer;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%);
  width: 2.25rem;
  display: flex;
  justify-content: space-between;
`;

const AdBar: FC = () => {
  const [image, setImage] = useState<1 | 2 | 3>(1);
  useEffect(() => {
    const timeout = setTimeout(
      () => (image == 3 ? setImage(1) : setImage((image + 1) as 2 | 3)),
      5000
    );
    return () => clearTimeout(timeout);
  }, [image]);

  return (
    <Wrapper>
      <Inner image={image}>
        <Link href="/items/Laptop/Nitro 5 AN515-57-54K7 (NH.QESEU.003)" passHref>
          <AdImageLink>
            <AdImage src="images/Laptop.bmp" />
          </AdImageLink>
        </Link>
        <Link href="/items/Smartphone/Galaxy M52 5G" passHref>
          <AdImageLink>
            <AdImage src="images/Smartphone.bmp" />
          </AdImageLink>
        </Link>
        <Link href="/items/Tablet/Tab M10 FHD Plus (2nd Gen) 4G" passHref>
          <AdImageLink>
            <AdImage src="images/Tablet.bmp" />
          </AdImageLink>
        </Link>
      </Inner>
      <ButtonsWrapper>
        <ChooseImageButton
          onClick={() => {
            setImage(1);
          }}
          active={image == 1}
        />
        <ChooseImageButton
          onClick={() => {
            setImage(2);
          }}
          active={image == 2}
        />
        <ChooseImageButton
          onClick={() => {
            setImage(3);
          }}
          active={image == 3}
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default AdBar;
