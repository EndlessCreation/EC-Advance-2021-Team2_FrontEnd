import React, { useState } from 'react';
import Search from '../components/search/Search';

const SearchContainer = (props) => {
  const [searchState, setSearchState] = useState();

  return <Search />;
};

export default SearchContainer;
