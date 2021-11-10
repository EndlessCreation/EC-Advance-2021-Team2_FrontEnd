import React from 'react';
import styled from 'styled-components';

const StyledTagMark = styled.button`
  height: 80px;
  display: flex;
  background-color: ${({ tagColor, theme }) => theme.component[tagColor][1]};
  align-items: center;
  padding: 0px 28px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.font['white']};
  & + & {
    margin-left: 30px;
  }
`;

const TagMark = ({ tagName, tagColor }) => {
  if (!(tagName && tagColor)) return null;
  //위의 값을 받아오지 못했을때  화면에서는 < 초기값으로 랜더링 -> 값 적용된 컴포넌트 랜더링 > 하는 버벅임이 생겨서 위 코드 추가
  return <StyledTagMark tagColor={tagColor}>{tagName}</StyledTagMark>;
};

export default TagMark;
