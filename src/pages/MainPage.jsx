import React from 'react';
import FooterContainer from '../containters/common/FooterContainer';
import HeaderContainer from '../containters/common/HeaderContainer';
import MainInputContainer from '../containters/MainInputContainer';

// 사이트를 처음 방문 했을 때 보이는 view 입니다.
const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      {/* Banner or TimLog*/}
      <MainInputContainer />
      <FooterContainer />
    </>
  );
};

export default MainPage;
