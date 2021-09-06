import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HomeComponent from '../components/HomeComponent';
import { useDispatch } from 'react-redux';
import { writePost } from '../modules/post';
const HomeContainer = () => {
  const { user, post } = useSelector(({ user, post }) => ({
    user: user.user,
    post: post.post,
  }));
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', image);
    formData.append('content', content);
    console.log(formData);
    dispatch(writePost(formData));
    setContent('');
    setImage(null);
  };
  const onChange = (e) => {
    const { value, name, files } = e.target;
    if (name === 'content') {
      setContent(value);
    } else if (name === 'image') {
      console.log(files);
      setImage(files[0]);
    }
  };
  return (
    <HomeComponent
      onSubmit={onSubmit}
      onChange={onChange}
      user={user}
      content={content}
      image={image}
    />
  );
};

export default HomeContainer;
