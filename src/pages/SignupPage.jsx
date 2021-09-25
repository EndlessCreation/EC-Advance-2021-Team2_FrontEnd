import React from 'react';
import styled from 'styled-components';
import SignupContainer from '../containters/auth/SignupContainer';
import AuthHeaderContainer from '../containters/common/AuthHeaderContainer';

const Signup = () => {
  return (
    <PageWrapper>
      <AuthHeaderContainer />
      <SignupContainer />
    </PageWrapper>
  );
};
const PageWrapper = styled.div`
  position: relative;
  display: flex;
  height: 120vh;
  width: 100vw;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  background: #fafcf9;
  @media ${(props) => props.theme.mobile} {
    padding: 0;
    align-items: normal;
  }
`;
export default Signup;
