import React from 'react';
import HeaderContainer from '../containters/common/HeaderContainer';
import MainInputContainer from '../containters/MainInputContainer';
import TIMContainer from '../containters/TIMContainer';
import { TIMPageWrapper } from '../styles/PageWrapper';

const TIMPage = () => {
  return (
    <>
      <TIMPageWrapper>
        <HeaderContainer />
        <TIMContainer />
        <MainInputContainer />
      </TIMPageWrapper>
    </>
  );
};

export default TIMPage;
