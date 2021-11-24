import axios from '../../node_modules/axios/index';

// 태그만 받아옴
export const getTag = async () => {
  const response = await axios({
    method: 'get',
    url: '/tag-keyword-view/alltag',
  });
  return response.data;
};
// 태그와 키워드 같이 받아옴
export const getTagKeyword = async () => {
  const response = await axios({
    method: 'get',
    url: '/tag-keyword-view/alltag/keyword',
  });
  return response.data;
};
// 특정 태그의 키워드만 받아옴
export const getKeywordInTag = async (tagId) => {
  const response = await axios({
    method: 'get',
    url: `/tag-keyword-view/tag/${tagId}`,
  });
  return response.data;
};
