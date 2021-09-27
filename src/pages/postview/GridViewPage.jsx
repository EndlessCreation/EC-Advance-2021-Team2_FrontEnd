import React from 'react';
import HeaderContainer from '../../containters/common/HeaderContainer';
import MainInputContainer from '../../containters/MainInputContainer';
import GridViewContainer from '../../containters/postview/GridViewContainer';
import { GridViewPageWrapper } from '../../styles/PageWrapper';

const GridViewPage = () => {
  return (
    <GridViewPageWrapper>
      <HeaderContainer />
      <GridViewContainer />
      <MainInputContainer />
    </GridViewPageWrapper>
  );
};

export default GridViewPage;
