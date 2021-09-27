import React from 'react';
import LoginContainer from '../containters/auth/LoginContainer';
import OAuthContainer from '../containters/auth/OAuthContainer';
import AuthHeaderContainer from '../containters/common/AuthHeaderContainer';
import { LoginPageWrapper } from '../styles/PageWrapper';

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <AuthHeaderContainer />
      <LoginContainer OAuthComponent={OAuthContainer} />
    </LoginPageWrapper>
  );
};

export default LoginPage;
