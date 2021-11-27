import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import MainInput from '../components/MainInput';
import { useDispatch } from 'react-redux';
import { createPost } from '../modules/post';
import { reloadAction } from '../modules/reload';
import theme from '../styles/theme';
import { randomIndex } from '../lib/util/randomIndex';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const MainInputContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState('');
  const [keyword, setKeyword] = useState('');
  const hashWrapperRef = useRef();
  const inputRef = useRef();

  const colors = Object.keys(theme.component).filter(
    (color) => color !== 'gray' && color !== 'grey',
  );

  console.log(pathname.split('/')[1]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!(tag && keyword && inputRef.current.value !== '')) {
      alert('tag와 keyword, 메모를 모두 입력해주세요');
      return;
    } else {
      const formData = new FormData();
      const content = inputRef.current.value;
      const tag_color = colors[randomIndex(0, colors.length - 2)];
      const keyword_color = colors[randomIndex(0, colors.length - 2)];

      formData.append('file', image);
      formData.append('content', content);
      formData.append('tag', tag);
      formData.append('tag_color', tag_color);
      formData.append('keyword', keyword);
      formData.append('keyword_color', keyword_color);

      dispatch(createPost(formData));
      dispatch(reloadAction('timLog'));
      dispatch(reloadAction(pathname.split('/')[1]));

      inputRef.current.value = '';
      setImage(null);
      setTag('');
      setKeyword('');
    }
  };

  const onChange = (e) => {
    const { name, files } = e.target;
    if (name === 'image') {
      setImage(files[0]);
    }
  };
  const onKeyUp = (e) => {
    console.log(tag, keyword);

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
    <MainInput
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
