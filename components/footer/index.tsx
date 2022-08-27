import { FC } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 5rem;
  border-top: 0.0625rem solid #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Inner = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 0 1rem;
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Inner>© Copyright - Supermart Template by DesignFalls</Inner>
    </StyledFooter>
  );
};

export default Footer;
