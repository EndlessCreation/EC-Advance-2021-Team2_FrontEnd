import axios from 'axios';

export const signup = async ({
  email,
  name,
  nickname,
  password,
  account,
  phone_number,
}) => {
  const response = await axios({
    method: 'post',
    url: '/api/users/signup',
    data: {
      email,
      name,
      nickname,
      password,
      account,
      phone_number,
    },
  });
  return response.data;
};

export const login = async ({ account, password }) => {
  console.log(`로그인 시도`);
  const response = await axios({
    method: 'post',
    url: '/api/users/login',
    data: {
      account,
      password,
    },
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/users/logout',
  });
  return null;
};

export const check = async () => {
  const response = await axios({
    method: 'get',
    url: '/api/users/get_user',
  });
  return response.data;
};

export const findId = async ({ name, email }) => {
  const response = await axios({
    method: 'post',
    url: '/api/users/find/email', // url 수정 예정 email->id 변경 필요
    data: {
      name,
      email,
    },
  });
  return response.data;
};

export const findPassword = async ({ account, email }) => {
  const response = await axios({
    method: 'post',
    url: '/api/users/find/password',
    data: {
      account,
      email,
    },
  });
  return response.data;
};

export const sendEmail = async ({ account, email, phone_number }) => {
  const response = await axios({
    method: 'post',
    url: '/api/users/find/password',
    data: {
      account,
      email,
      phone_number,
    },
  });
  return response.data;
};

export const updatePassword = async ({ id, password }) => {
  const response = await axios({
    method: 'post',
    url: '/api/users/find/changepw',
    data: {
      id,
      password,
    },
  });
  return response.data;
};

export const checkEmail = async (email) => {
  const response = await axios({
    method: 'post',
    url: '/api/users/check/email',
    data: {
      email,
    },
  });
  return response.data;
};
export const checkNickname = async (nickname) => {
  const response = await axios({
    method: 'post',
    url: '/api/users/check/nickname',
    data: {
      nickname,
    },
  });
  return response.data;
};
export const checkAccount = async (account) => {
  const response = await axios({
    method: 'post',
    url: '/api/users/check/account',
    data: {
      account,
    },
  });
  return response.data;
};

export const deleteAccount = async () => {
  const response = await axios({
    method: 'delete',
    url: '/api/users/delete',
  });
  return response.data;
};
