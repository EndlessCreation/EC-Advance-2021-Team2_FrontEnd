import React from 'react';
import SignupContainer from '../containters/auth/SignupContainer';
import AuthHeaderContainer from '../containters/common/AuthHeaderContainer';
import { SignupPageWrapper } from '../styles/PageWrapper';

const Signup = () => {
  return (
    <SignupPageWrapper>
      <AuthHeaderContainer />
      <SignupContainer />
    </SignupPageWrapper>
  );
};

export default Signup;
