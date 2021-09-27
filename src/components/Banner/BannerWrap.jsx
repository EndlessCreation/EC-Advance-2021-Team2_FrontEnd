import React from 'react';
import styled from 'styled-components';
// import TIM_Color from '../../styles'

const StyledBannerWrap = styled.div`
  width: 1152px;
  height: 400px;
  margin-top: 150px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  background-color: #505050;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Whitemark = styled.div`
  position: absolute;
  border-radius: 20px;
  background-color: rgba(200, 200, 200, 0.3);
  margin: auto;
  width: 1152px;
  height: 400px;
  overflow: hidden;
  display: flex;
`;

const BannerWrap = ({ children, image }) => {
  return (
    <StyledBannerWrap image={image}>
      <Whitemark>{children}</Whitemark>
    </StyledBannerWrap>
  );
};
export default BannerWrap;
