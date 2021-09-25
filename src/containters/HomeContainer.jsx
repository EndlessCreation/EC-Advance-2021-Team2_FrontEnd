import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { useDispatch } from 'react-redux';
import { createKeyword, createPost, createTag } from '../modules/post';

const HomeContainer = () => {
  const { user, tagInfo, keywordInfo } = useSelector(({ user, post }) => ({
    user: user.user,
    tagInfo: post.tagInfo,
    keywordInfo: post.keywordInfo,
  }));
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState('');
  const [keyword, setKeyword] = useState('');
  const [submit, setSubmit] = useState(false);
  const hashWrapperRef = useRef();
  const inputRef = useRef();
  const tagColor = 'green';

  useEffect(() => {
    if (submit && tag !== '') {
      console.log(submit, tag);
      dispatch(createTag({ tag, tagColor }));
      setTag('');
    }
  }, [submit, dispatch, tag]);
  useEffect(() => {
    if (submit && keyword !== '' && tagInfo !== null) {
      console.log(submit, keyword);
      dispatch(
        createKeyword({ tagId: tagInfo.id, keyword, keywordColor: tagColor }),
      );
      setKeyword('');
    }
  }, [submit, tagInfo, dispatch, keyword, image]);
  useEffect(() => {
    if (submit) {
      const formData = new FormData();
      const content = inputRef.current.value;
      formData.append('file', image);
      formData.append('content', content);
      formData.append('tag_id', tagInfo.id);
      formData.append('keyword_id', keywordInfo.id);
      dispatch(createPost(formData));
      setSubmit(false);
    }
  }, [submit, tagInfo, keywordInfo, image, dispatch]);
  // 서버에서 에러가 나는 기준?
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    inputRef.current.value = '';
    setImage(null);
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

export default HomeContainer;
