import axios from 'axios';

// 전체 포스트 불러오기
export const postview = async () => {
  const response = await axios({
    method: 'get',
    url: '/postview',
  });
  return response.data;
};
