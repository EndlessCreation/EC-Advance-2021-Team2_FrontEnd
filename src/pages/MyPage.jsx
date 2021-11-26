import React from 'react';

import HeaderContainer from '../containters/common/HeaderContainer';
import MyPageContainer from '../containters/MyPageContainer';
import { MypageWrapper } from '../styles/PageWrapper';

const MyPage = () => {
  return (
    <MypageWrapper>
      <MyPageContainer />

      <HeaderContainer />
    </MypageWrapper>
  );
};

export default MyPage;
