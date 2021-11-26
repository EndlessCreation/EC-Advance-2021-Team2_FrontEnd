import React, { useState } from 'react';
import styled from 'styled-components';
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
          onBlur={(e) => {
            handleOpenned(false);
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
          <StyledSearchBackGround>
            <StyledSearchDataWrapper>
              {searchingData && searchingData !== null ? (
                searchingData.map((item, index) => (
                  <SearchItem key={index} item={item} />
                ))
              ) : (
                <EmptyData> 검색 결과가 없습니다</EmptyData>
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
  flex-direction: column;
  margin-right: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 0px 16px 16px;
  overflow: hidden;
`;

const EmptyData = styled.div`
  padding: 100px 0px;
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
`;
