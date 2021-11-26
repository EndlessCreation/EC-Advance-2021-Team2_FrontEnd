import React from 'react';
import HeaderContainer from '../containters/common/HeaderContainer';
import MainInputContainer from '../containters/MainInputContainer';
import TIMViewContainer from '../containters/TIMViewContainer';
import { TIMPageWrapper } from '../styles/PageWrapper';

const TIMPage = () => {
  return (
    <>
      <TIMPageWrapper>
        <HeaderContainer />
        <TIMViewContainer />
        <MainInputContainer />
      </TIMPageWrapper>
    </>
  );
};

export default TIMPage;
