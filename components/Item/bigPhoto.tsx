import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";
import { baseURL } from "../../config/axiosInstance";
import IItem from "../../model/";

const BigImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CloseImageButton = styled.button`
  font-size: 0.875rem;
  height: 2.125rem;
  width: 2.125rem;
  background: none;
  border: 0.0625rem solid #e2e2e2;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 3.9%;
  right: 3.5%;
`;

const BigImage = styled.img`
  border: 1vw solid #e2e2e2;
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;
  cursor: default;
`;

const BigPhoto: FC<{
  item: IItem;
  selectedPhoto: number;
  setShowBigImage: Dispatch<SetStateAction<boolean>>;
}> = ({ item, selectedPhoto, setShowBigImage }) => {
  return (
    <BigImageWrapper
      onClick={() => {
        setShowBigImage(false);
        document.querySelector("body")!.style.overflow = "auto";
        document.querySelector("body")!.style.paddingRight = "0";
      }}
    >
      <BigImage
        onClick={(e) => e.stopPropagation()}
        src={`${baseURL}item/${item.model}/${selectedPhoto}`}
      />
      <CloseImageButton
        onClick={() => {
          setShowBigImage(false);
          document.querySelector("body")!.style.overflow = "auto";
          document.querySelector("body")!.style.paddingRight = "0";
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </CloseImageButton>
    </BigImageWrapper>
  );
};

export default BigPhoto;
