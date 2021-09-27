import React from 'react';
import styled from 'styled-components';
import TIM_LogContainer from '../../containters/TIM_LogContainer';
import Banner from '../Banner';
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
  justify-content: end;
  padding: 80px 40px 15px 40px;
`;

const Status = (props) => {
  const { title, data } = props.data;

  switch (props.state) {
    case 0:
      return <Banner />;
    case 1:
      return (
        <StyledWrapper>
          <StatusTab title={title} />
          <TIM_LogContainer data={data} />
        </StyledWrapper>
      );
    case 2:
      return (
        <StyledWrapper>
          <StatusTab title={title} />
          {/* <Graph /> */}
        </StyledWrapper>
      );
    default:
      return <Banner />;
  }
};
export default Status;
