import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PostComponent from '../../components/post/PostComponent';
import { getPostView } from '../../modules/post';

const PostContainer = () => {
  const { posts } = useSelector(({ post }) => ({ posts: post.posts }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostView());
  }, [dispatch]);
  const onEditPost = (post_id) => {
    // something
  };
  const onDeletePost = (post_id) => {
    // something
  };
  return (
    <PostComponent
      posts={posts}
      onEditPost={onEditPost}
      onDeletePost={onDeletePost}
    />
  );
};

export default PostContainer;
