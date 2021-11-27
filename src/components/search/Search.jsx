import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import SearchItem from './SearchItem';

const Search = ({
  isOpenned,
  searchValue,
  handleOpenned,
  handleInputChange,
  searchingData,
  handleKeyUp,
}) => {
  console.log(searchingData);

  return (
    <>
      <StyledSearchInputWrapper>
        <StyledSearchInput
          onFocus={(e) => {
            handleOpenned(true);
          }}
          value={searchValue}
          onChange={(e) => {
            handleInputChange(e);
          }}
          onKeyUp={() => {
            handleKeyUp();
          }}
        />
        {isOpenned && (
          <StyledSearchBackGround
            onClick={() => {
              handleOpenned(false);
            }}
          >
            <StyledSearchDataWrapper>
              {searchingData === undefined || searchingData === null ? (
                <EmptyData> 검색할 메모를 입력해주세요 </EmptyData>
              ) : searchingData.length === 0 ? (
                <EmptyData> 검색 결과가 없습니다</EmptyData>
              ) : (
                searchingData.map((item, index) => (
                  <SearchItem key={index} item={item} />
                ))
              )}
            </StyledSearchDataWrapper>
          </StyledSearchBackGround>
        )}
      </StyledSearchInputWrapper>
    </>
  );
};

export default Search;

const StyledSearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0px;
  height: 45px;
  box-sizing: border-box;
`;

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid #aeaeae;
  border-radius: 10px;
  padding-left: 14px;
  font-family: NanumGothic;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.font[3]};
`;
const StyledSearchBackGround = styled.div`
  position: fixed;
  left: 0px;
  top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
  z-index: 99;
  box-sizing: border-box;
  padding: 0px 100px;
  background-color: rgba(200, 200, 200, 0.6);
`;
const StyledSearchDataWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 20px 20px 20px 20px;
  min-width: 500px;
  justify-content: center;
  flex-direction: column;
  max-height: 640px;
  margin-right: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 0px 16px 16px;
  overflow-y: auto;
  z-index: 100;
  & > div {
    margin-top: 75px;
  }
`;

const EmptyData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NanumGothic;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 75px;
`;
