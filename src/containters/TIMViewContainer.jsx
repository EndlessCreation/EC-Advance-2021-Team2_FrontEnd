import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import TIMView from '../components/TIMView/TIMView';
import { deletePost, editPost, getPostInKeyword } from '../modules/post';

// 특정 키워드(keywordId) 안에 있는 tim 불러와야 함
const TIMViewContainer = ({ match, location }) => {
  const { user, postInKeyword } = useSelector(({ user, post }) => ({
    user: user.user,
    postInKeyword: post.postInKeyword,
    deletePostSuccess: post.deletePostSuccess,
  }));

  const dispatch = useDispatch();
  const { tagId, keywordId } = match.params;
  const {
    state: { tagName, tagColor },
  } = location;
  const {
    post: postList,
    keyword_name: keywordName,
    keyword_color: keywordColor,
  } = postInKeyword || { post: '', keyword_name: '', keyword_color: '' };

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
  }, [dispatch, keywordId, tagId]);

  // console.log(match, location);

  // console.log(user, postInKeyword);
  console.log(
    user,
    postList,
    tagName,
    tagColor,
    keywordName,
    keywordColor,
    onEditPost,
    onDeletePost,
  );
  if (postList.length === 0) return <>loading</>;
  if (postList)
    return (
      <TIMView
        user={user}
        postList={postList}
        tagName={tagName}
        tagColor={tagColor}
        keywordName={keywordName}
        keywordColor={keywordColor}
        onEditPost={onEditPost}
        onDeletePost={onDeletePost}
      />
    );
};

export default withRouter(TIMViewContainer);
