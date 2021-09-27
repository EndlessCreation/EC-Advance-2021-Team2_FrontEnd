import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import HomeComponent from '../components/MainInput';
import { useDispatch } from 'react-redux';
import { createPost } from '../modules/post';

const MainInputContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState('');
  const [keyword, setKeyword] = useState('');
  const hashWrapperRef = useRef();
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const content = inputRef.current.value;

    formData.append('file', image);
    formData.append('content', content);
    formData.append('tag', tag);
    formData.append('keyword', keyword);

    dispatch(createPost(formData));
    inputRef.current.value = '';
    setImage(null);
    setTag('');
    setKeyword('');
  };

  const onChange = (e) => {
    const { name, files } = e.target;
    if (name === 'image') {
      setImage(files[0]);
    }
  };
  const onKeyUp = (e) => {
    const { value } = e.target;
    if (value !== '') {
      if (value.includes('#')) {
        const tagIdx = value.indexOf('#');
        if (e.keyCode === 32) {
          const spaceIdx = value.lastIndexOf(' ');
          const tagStr = value.slice(tagIdx, spaceIdx + 1);
          inputRef.current.value = inputRef.current.value.replace(
            value.slice(tagIdx, spaceIdx + 1),
            '',
          );
          setTag(tagStr.trim().replace('#', ''));
        }
      } else if (value.includes('@')) {
        const keywordIdx = value.indexOf('@');
        if (e.keyCode === 32) {
          const spaceIdx = value.lastIndexOf(' ');
          const keywordStr = value.slice(keywordIdx, spaceIdx + 1);
          inputRef.current.value = inputRef.current.value.replace(
            value.slice(keywordIdx, spaceIdx + 1),
            '',
          );
          setKeyword(keywordStr.trim().replace('@', ''));
        }
      }
    }
  };
  return (
    <HomeComponent
      onSubmit={onSubmit}
      onChange={onChange}
      onKeyUp={onKeyUp}
      user={user}
      tag={tag}
      keyword={keyword}
      hashWrapperRef={hashWrapperRef}
      inputRef={inputRef}
    />
  );
};

export default MainInputContainer;
