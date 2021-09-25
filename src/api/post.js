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

// 전체 포스트 불러오기
export const getPostView = async () => {
  const response = await axios({
    method: 'get',
    url: '/postview',
  });
  return response.data;
};

// tag 관련 api
export const createTag = async ({ tag, tagColor }) => {
  const response = await axios({
    method: 'post',
    url: '/tag',
    data: { tag, tagColor },
  });
  return response.data;
};

export const editTag = async ({ tagId, tag, tagColor }) => {
  const response = await axios({
    method: 'post',
    url: '/tag/edit',
    data: { tagId, tag, tagColor },
  });
  return response.data;
};

export const deleteTag = async (tagId) => {
  const response = await axios({
    method: 'post',
    url: '/tag/delete',
    data: { tagId },
  });
  return response.data;
};

// keword 관련 api
export const createKeyword = async ({ tagId, keyword, keword_color }) => {
  const response = await axios({
    method: 'post',
    url: '/keyword',
    data: { tagId, keyword, keword_color },
  });
  return response.data;
};

export const editKeyword = async ({
  keywordId,
  keyword,
  keywordColor,
  tagId,
}) => {
  const response = await axios({
    method: 'post',
    url: '/keyword/edit',
    data: { keywordId, keyword, keywordColor, tagId },
  });
  return response.data;
};

export const deleteKeyword = async ({ tagId, keywordId }) => {
  const response = await axios({
    method: 'post',
    url: '/keyword/delete',
    data: { tagId, keywordId },
  });
  return response.data;
};
