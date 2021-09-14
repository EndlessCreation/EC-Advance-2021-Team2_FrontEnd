import axios from 'axios';

export const login = async ({ email, password }) => {
  const response = await axios({
    method: 'post',
    url: '/users/login',
    data: {
      email,
      password,
    },
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios({
    method: 'post',
    url: '/users/logout',
  });
  return null;
};

export const signup = async ({ email, password, name, nickname }) => {
  const response = await axios({
    method: 'post',
    url: 'users/signup', // url 수정 예정
    data: {
      email,
      name,
      password,
    },
  });
  return response.data;
};

export const findId = async ({ name, email }) => {
  const response = await axios({
    method: 'post',
    url: 'users/find/email', // url 수정 예정 email->id 변경 필요
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
    url: 'users/find/password', // url 수정 예정
    data: {
      account,
      email,
    },
  });
  return response.data;
};

export const sendEmail = async ({account, email, phone_number}) =>{
  const response = await axios({
    method: 'post',
    url: 'users/find/password',
    data: {
      account,
      email,
      phone_number,
    },
  });
  return response.data;
}

export const updatePassword = async ({ id, password }) => {
  const response = await axios({
    method: 'post',
    url: 'users/find/changepw', // url 수정 예정
    data: {
      id,
      password,
    },
  });
  return response.data;
};

