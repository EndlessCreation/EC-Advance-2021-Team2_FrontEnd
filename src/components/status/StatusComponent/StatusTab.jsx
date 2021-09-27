import React from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../../../styles/color';

const StyledStatusTab = styled.div`
  border-radius: 20px;
  background-color: ${TIM_Color('brand', 3)};
  color: ${TIM_Color('font', 'white')};
  height: 70px;
  position: absolute;
  left: 20px;
  top: -15px;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const StatusTab = ({ title }) => {
  return <StyledStatusTab>{title}</StyledStatusTab>;
};
export default StatusTab;
