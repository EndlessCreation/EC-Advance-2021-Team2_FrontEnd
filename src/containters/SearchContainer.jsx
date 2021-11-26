import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../api/search';
import _ from 'lodash';
import Search from '../components/search/Search';
import { useEffect } from 'react';

const SearchContainer = (props) => {
  // const [searchState, setSearchState] = useState();
  const [isOpenned, setIsOpenned] = useState();
  const [searchValue, setSearchValue] = useState();
  const [searchingData, setSearchingData] = useState();
  const dispatch = useDispatch();

  const sendContent = async (Query) => {
    if (Query === 0) return;
    try {
      setSearchingData(await search(Query));
    } catch (e) {
      console.log(e);
    }
  };

  const debounceSearchContent = useRef(
    _.debounce((q) => sendContent(q), 1000),
  ).current;

  const handleOpenned = (state) => {
    setIsOpenned(state);
  };

  const handleInputChange = (e) => {
    //밸류 바꾸기
    setSearchValue(e.target.value);
  };
  const handleKeyUp = async () => {
    //api 요청하기 - 디바운싱
    console.log('여기 왔냐?');
    // if (searchValue.length > 0) {
    const responseData = await debounceSearchContent(searchValue);
    console.log(responseData);

    setSearchingData(responseData);
    console.log(setSearchingData);
    // }
  };
  return (
    <Search
      isOpenned={isOpenned}
      searchValue={searchValue}
      handleOpenned={handleOpenned}
      handleInputChange={handleInputChange}
      searchingData={searchingData}
      handleKeyUp={handleKeyUp}
    />
  );
};

export default SearchContainer;
