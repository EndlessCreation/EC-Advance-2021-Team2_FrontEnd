import axios from 'axios';

export const writePost = async (formData) => {
  const response = await axios({
    method: 'post',
    url: '/posts/upload',
    headers: { 'content-type': 'multipart/form-data' },
    data: formData,
  });
  return response.data;
};

export const editPost = async ({ content, post_id }) => {
  const response = await axios({
    method: 'post',
    url: '/posts/edit',
    data: { content, post_id },
  });
  return response.data;
};

export const deletePost = async ({ post_id }) => {
  const response = await axios({
    method: 'post',
    url: '/posts/delete',
    data: { post_id },
  });
  return response.data;
};
