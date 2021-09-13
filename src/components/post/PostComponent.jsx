import React from 'react';
import styled from 'styled-components';

const PostItem = ({ post, onEditPost, onDeletePost }) => {
  const {
    id,
    content,
    image: { path },
  } = post;
  console.log(__dirname);
  return (
    <li>
      <h3>{content}</h3>
      <img src={path} alt={path} />
      {/* <ImgBox path={path} /> */}
      <button onClick={onEditPost}>Edit</button>
      <button onClick={onDeletePost}>Delete</button>
    </li>
  );
};

const PostComponent = ({ posts, onEditPost, onDeletePost }) => {
  // posts가 없는 경우 : 1. 아예 없는 경우 2. 로딩 중인 경우
  if (!posts) return <div>Loading</div>;
  if (posts.length === 0) return <div>TIM을 채워주세요~</div>;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onEditPost={onEditPost}
          onDeletePost={onDeletePost}
        />
      ))}
    </ul>
  );
};

const ImgBox = styled.div`
  background: url(${(props) => props.path});
  width: 100px;
  height: 100px;
`;

export default PostComponent;
