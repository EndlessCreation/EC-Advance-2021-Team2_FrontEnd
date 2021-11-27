import axios from '../../node_modules/axios/index';

// 유저의 전체 태그만 받아옴
export const getTag = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/tag-keyword-view/alltag',
  });
  return response.data;
};
// 유저의 전체 태그와 키워드
export const getTagKeyword = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/tag-keyword-view/alltag/keyword',
  });
  return response.data;
};
// 특정 태그(tagId)에 있는 키워드만 받아옴
export const getKeywordInTag = async (tagId) => {
  const response = await axios({
    method: 'get',
    url: `/api/tag-keyword-view/tag/${tagId}`,
  });
  return response.data;
};
