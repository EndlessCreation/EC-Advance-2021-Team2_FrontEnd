import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getPostInTag } from '../api/post';
import TIMView from '../components/TIMView/TIMView';
import {
  deletePost,
  editPost,
  getPostInKeyword,
  getPostInTag,
} from '../modules/post';

// 특정 키워드(keywordId) 안에 있는 tim 불러와야 함
const TIMContainer = ({ match, location }) => {
  const { user, postInKeyword, tag_color, deletePostSuccess } = useSelector(
    ({ user, post }) => ({
      user: user.user,
      postInKeyword: post.postInKeyword,
      tagColor: post.postInTag.tag_color,
      deletePostSuccess: post.deletePostSuccess,
    }),
  );

  const dispatch = useDispatch();
  const { tagId, keywordId } = match.params;
  const {
    state: { tagName, tagColor },
  } = location;
  const onDeletePost = (post_id) => {
    let result = window.confirm('해당 TIM을 삭제하시겠습니까?');
    if (result) {
      dispatch(deletePost(post_id));
      // 삭제하자마자 리렌더링 하게 하려면?
    } else return;
  };
  const onEditPost = (formData) => {
    dispatch(editPost(formData));
    // 수정하자마자 리렌더링 하게 하려면?
  };
  useEffect(() => {
    dispatch(getPostInKeyword(keywordId));
    dispatch(getPostInTag(tagId));
  }, [dispatch, tagId, keywordId]);
  useEffect(() => {
    if (deletePostSuccess) dispatch(getPostInKeyword(keywordId));
  }, [dispatch, deletePostSuccess, keywordId]);

  return (
    <TIMView
      user={user}
      postList={postList}
      tagName={tagName}
      tagColor={tag_color}
      postInKeyword={postInKeyword}
      onDeletePost={onDeletePost}
      onEditPost={onEditPost}
    />
  );
};

export default withRouter(TIMContainer);
