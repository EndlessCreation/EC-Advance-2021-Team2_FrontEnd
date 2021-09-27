import React from 'react';
import FooterContainer from '../containters/common/FooterContainer';
import HeaderContainer from '../containters/common/HeaderContainer';
import MainInputContainer from '../containters/MainInputContainer';
import StatusContainer from '../containters/status/StatusContainer';
import { MainPageWrapper } from '../styles/PageWrapper';

// 사이트를 처음 방문 했을 때 보이는 view 입니다.
const MainPage = () => {
  return (
    <MainPageWrapper>
      <HeaderContainer />
      <StatusContainer />
      <MainInputContainer />
      <FooterContainer />
    </MainPageWrapper>
  );
};

export default MainPage;
