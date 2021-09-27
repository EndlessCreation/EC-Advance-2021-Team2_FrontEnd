import React from 'react';
import HeaderContainer from '../containters/common/HeaderContainer';
import KeywordContainer from '../containters/KeywordContainer';
import { KeywordPageWrapper } from '../styles/PageWrapper';

const KeywordPage = (props) => {
  return (
    <KeywordPageWrapper>
      <HeaderContainer />
      <KeywordContainer />
    </KeywordPageWrapper>
  );
};

export default KeywordPage;
