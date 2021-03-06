import axios from 'axios';

export const search = async (content) => {
  console.log(content);
  const response = await axios({
    method: 'post',
    url: `/api/search`,
    data: { content: content },
  });
  return response.data;
};
