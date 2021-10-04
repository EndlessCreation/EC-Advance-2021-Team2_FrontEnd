import React from 'react';
import HeaderContainer from '../containters/common/HeaderContainer';
import KeywordContainer from '../containters/KeywordContainer';
import MainInputContainer from '../containters/MainInputContainer';
import { KeywordPageWrapper } from '../styles/PageWrapper';

const KeywordPage = (props) => {
  return (
    <KeywordPageWrapper>
      <HeaderContainer />
      <KeywordContainer />
      {/* <MainInputContainer /> */}
    </KeywordPageWrapper>
  );
};

export default KeywordPage;
