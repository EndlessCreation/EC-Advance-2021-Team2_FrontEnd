import React from 'react';
import styled from 'styled-components';

const StyledStatusTab = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.brand[3]};
  color: ${(props) => props.theme.font['white']};
  height: 70px;
  position: absolute;
  left: 20px;
  top: -80px;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 45px;
  margin-top: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const StatusTab = ({ title }) => {
  return <StyledStatusTab>{title}</StyledStatusTab>;
};
export default StatusTab;
