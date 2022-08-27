import { FC, ReactNode } from "react";

import styled from "styled-components";

const ContainerDiv = styled.div`
  margin: 0 auto;
  max-width: calc(1140px + 2rem);
  padding: 0 1rem;
`;

interface IContainer {
  children?: ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
