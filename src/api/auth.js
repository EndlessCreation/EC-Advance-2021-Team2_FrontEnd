import axios from 'axios';

export const signup = async ({ email, name, nickname, password, account, phone_number, birth }) => {
  const response = await axios({
    method: 'post',
    url: '/users/signup',
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
  const response = await axios({
    method: 'post',
    url: '/users/login',
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
    url: '/users/logout',
  });
  return null;
};

export const check = async () => {
  const response = await axios({
    method: 'post',
    url: 'users/get_user', // url 수정 예정
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

export const checkEmail = async (email) => {
  const response = await axios({
    method: 'post',
    url: '/users/check/email',
    data: {
      email
    }
  });
  return response.data;
}
export const checkNickname = async (nickname) => {
  const response = await axios({
    method: 'post',
    url: '/users/check/nickname',
    data: {
      nickname
    }
  });
  return response.data;
}
export const checkAccount = async (account) => {
  const response = await axios({
    method: 'post',
    url: '/users/check/account',
    data: {
      account
    }
  });
  return response.data;
}
