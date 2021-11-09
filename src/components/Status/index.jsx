import React from 'react';
import styled from 'styled-components';
import BannerContainer from '../../containters/status/BannerContainer';
import TIMLogContainer from '../../containters/status/TIMLogContainer';
import { StatusPageWrapper } from '../../styles/PageWrapper';
import Banner from '../Banner';
import StatusButton from './StatusButton';
import StatusTab from './StatusTab';

const StyledWrapper = styled.div`
  position: relative;
  width: 1080px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  overflow: visible;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  justify-content: end;
  padding: 80px 40px 15px 40px;
`;

const StatusReduce = ({ state }) => {
  switch (state) {
    case 0:
      return <BannerContainer />;
    case 1:
      return (
        <StyledWrapper>
          <StatusTab title={'최근기록'} />
          <TIMLogContainer type="log" />
        </StyledWrapper>
      );
    case 2:
      return (
        <StyledWrapper>
          <StatusTab title={'즐겨찾기'} />
          <TIMLogContainer type="favorite" />
        </StyledWrapper>
      );
    case 3:
      return (
        <StyledWrapper>
          <StatusTab title={'그래프'} />
          {/* <Graph /> */}
        </StyledWrapper>
      );
    default:
      return <Banner />;
  }
};

const Status = ({ state, onStateChange }) => {
  return (
    <StatusPageWrapper>
      <StatusReduce state={state} />
      <StatusButton onStateChange={onStateChange}> </StatusButton>
    </StatusPageWrapper>
  );
};

export default Status;
