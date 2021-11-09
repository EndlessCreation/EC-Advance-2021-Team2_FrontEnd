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

export const favoritePost = async (post_id) => {
  const response = await axios({
    method: 'post',
    url: `/posts/favorite/`,
    data: { post_id },
  });
  return response.data;
};

// 즐겨찾기 게시글 가져오기
export const getFavoritePost = async () => {
  const response = await axios({
    method: 'get',
    url: '/postview/favorite/1',
  });
  return response.data;
};
// 최근 포스트 5개 불러오기
export const getRecentPost = async () => {
  const response = await axios({
    method: 'get',
    url: `/postview/recent/`,
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
  });
  return response.data;
};

// 배너 가져오기
export const getBanner = async () => {
  const response = await axios({
    method: 'get',
    url: '/banner',
  });
  return response.data;
};
