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

//포스트하나만 불러오기
export const getOnePostView = async (post_id) => {
  const response = await axios({
    method: 'get',
    url: `/postview/one/${post_id}`,
  });
  return response.data;
};

//즐겨찾기 포스트 불러오기
export const getFavorPostView = async (post_id) => {
  const response = await axios({
    method: 'get',
    url: `/postview/one/${post_id}`,
  });
  return response.data;
};

// 최근 포스트 5개 불러오기
export const getRecentPostView = async () => {
  const response = await axios({
    method: 'get',
    url: `/postview/recent/1`,
  });
  return response.data;
};
