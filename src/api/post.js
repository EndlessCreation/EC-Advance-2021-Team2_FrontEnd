import axios from 'axios';

export const createPost = async (formData) => {
  const response = await axios({
    method: 'post',
    url: '/api/posts/upload',
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
  return response.data;
};

export const editPost = async (formData) => {
  const response = await axios({
    method: 'post',
    url: '/api/posts/edit',
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
  return response.data;
};

export const deletePost = async (post_id) => {
  const response = await axios({
    method: 'post',
    url: '/api/posts/delete',
    data: { post_id },
  });
  return response.data;
};

export const favoritePost = async (post_id) => {
  const response = await axios({
    method: 'post',
    url: `/api/posts/favorite/`,
    data: { post_id },
  });
  return response.data;
};

// 즐겨찾기 게시글 가져오기
export const getFavoritePost = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/postview/favorite/1',
  });
  return response.data;
};
// 최근 포스트 5개 불러오기
export const getRecentPost = async () => {
  const response = await axios({
    method: 'get',
    url: `/api/postview/recent/`,
  });
  return response.data;
};

// 전체 포스트 불러오기
// 모든 게시물 보기
export const getPostView = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/postview',
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
    url: '/api/banner',
  });
  return response.data;
};

// 키워드(keywordId) 내 게시물 보기
export const getPostInKeyword = async (keywordId) => {
  const response = await axios({
    method: 'get',
    url: `/api/postview/keyword/${keywordId}`,
  });
  return response.data;
};
// 태그(tagId) 내의 키워드와 포스트 불러오기
export const getPostInTag = async (tagId) => {
  const response = await axios({
    method: 'get',
    url: `/api/postview/tag/${tagId}`,
  });
  return response.data;
};

export const filterPostInTag = async (filteringParams) => {
  console.log(filteringParams);
  const response = await axios({
    method: 'post',
    url: `/api/postview/period/tag/`,
    data: filteringParams,
  });
  return response.data;
};

export const filterPostInKeyword = async (filteringParams) => {
  // console.log(filteringParams);
  const response = await axios({
    method: 'post',
    url: `/api/postview/period/keyword/`,
    data: filteringParams,
  });
  return response.data;
};
