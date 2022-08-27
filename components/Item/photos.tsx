import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import styled from "styled-components";
import { baseURL } from "../../config/axiosInstance";
import IItem from "../../model/";
import BigPhoto from "./bigPhoto";

const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

  @media screen and (max-width: 880px) {
    width: 100%;
  }
`;

const MainPhotoWrapper = styled.div`
  position: relative;
  margin-bottom: 1.1875rem;
`;

const Photo = styled.img`
  border-top: 0.0625rem solid #e8e8e8;
  padding-top: 1.1875rem;
  height: 36.75rem;
  width: 100%;
  object-fit: contain;
`;

const PhotoSelector = styled.div`
  height: 8.5rem;
  display: flex;
  justify-content: flex-start;
  overflow: auto;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    height: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

interface IPhotoSelect {
  selected: boolean;
}

const PhotoSelect = styled.img<IPhotoSelect>`
  border: 0.0625rem solid #e8e8e8;
  padding: 0.5rem;
  width: 7.9375rem;
  margin-right: 1.1875rem;
  object-fit: contain;
  cursor: pointer;

  ${({ selected }) => selected && "  border: 0.3625rem solid #e8e8e8;padding: 0.2rem;"}

  :last-of-type {
    margin-right: 0;
  }
`;

const OpenImageButton = styled.button`
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
  background-color: #fff;
`;

const Photos: FC<{ item: IItem }> = ({ item }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [showBigImage, setShowBigImage] = useState(false);
  return (
    <PhotosWrapper>
      {showBigImage && (
        <BigPhoto item={item} selectedPhoto={selectedPhoto} setShowBigImage={setShowBigImage} />
      )}
      <MainPhotoWrapper>
        <Photo src={`${baseURL}item/${item.model}/${selectedPhoto}`}></Photo>{" "}
        <OpenImageButton
          onClick={() => {
            document.querySelector("body")!.style.overflow = "hidden";
            document.querySelector("body")!.style.paddingRight = "17px";
            setShowBigImage(true);
          }}
        >
          <FontAwesomeIcon icon={faMaximize} />
        </OpenImageButton>
      </MainPhotoWrapper>
      <PhotoSelector>
        {(() => {
          const selectors = [];

          for (let i = 0; i < item.images; i++) {
            selectors.push(
              <PhotoSelect
                onClick={() => setSelectedPhoto(i)}
                selected={selectedPhoto == i}
                key={i}
                src={`${baseURL}item/${item.model}/${i}`}
              />
            );
          }

          return selectors;
        })()}
      </PhotoSelector>
    </PhotosWrapper>
  );
};

export default Photos;
