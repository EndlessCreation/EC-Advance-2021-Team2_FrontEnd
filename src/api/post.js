import axios from 'axios';

export const createPost = async (formData) => {
  const response = await axios({
    method: 'post',
    url: '/posts/upload',
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
  return response.data;
};

export const editPost = async (formData) => {
  const response = await axios({
    method: 'post',
    url: '/posts/edit',
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
  return response.data;
};

export const deletePost = async (post_id) => {
  const response = await axios({
    method: 'post',
    url: '/posts/delete',
    data: { post_id },
  });
  return response.data;
};

// 모든 게시물 보기
export const getPostView = async () => {
  const response = await axios({
    method: 'get',
    url: '/postview',
  });
  return response.data;
};

// 키워드(keywordId) 내 게시물 보기
export const getPostInKeyword = async (keywordId) => {
  const response = await axios({
    method: 'get',
    url: `/postview/keyword/${keywordId}`,
  });
  return response.data;
};
// 태그(tagId) 내의 키워드와 포스트 불러오기
export const getPostInTag = async (tagId) => {
  const response = await axios({
    method: 'get',
    url: `/postview/tag/${tagId}`,
  });
  return response.data;
};
