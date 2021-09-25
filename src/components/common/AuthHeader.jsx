import React from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <FaHome size="2rem" />
      </StyledLink>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default AuthHeader;
