import React from 'react';
import styled from 'styled-components';
import LoginContainer from '../containters/auth/LoginContainer';
import OAuthContainer from '../containters/auth/OAuthContainer';
import AuthHeaderContainer from '../containters/common/AuthHeaderContainer';

const LoginPage = () => {
  return (
    <PageWrapper>
      <AuthHeaderContainer />
      <LoginContainer OAuthComponent={OAuthContainer} />
    </PageWrapper>
  );
};
const PageWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: Roboto;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;
export default LoginPage;
