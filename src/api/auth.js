import axios from "axios";

export const signup = async ({ email, name, nickname, password, account, phone_number, birth }) => {
  const response = await axios({
    method: "post",
    url: "/users/signup",
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
    method: "post",
    url: "/users/login",
    data: {
      account,
      password,
    },
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios({
    method: "get",
    url: "/users/logout",
  });
  return null;
};

export const check = async (id) => {
  const response = await axios({
    method: "post",
    url: "/users/get_user",
    data: {
      id
    }
  });
  return response.data;
};

export const checkEmail = async (email) => {
  const response = await axios({
    method: "post",
    url: "/users/check/email",
    data: {
      email
    }
  });
  return response.data;
}
export const checkNickname = async (nickname) => {
  const response = await axios({
    method: "post",
    url: "/users/check/nickname",
    data: {
      nickname
    }
  });
  return response.data;
}
export const checkAccount = async (account) => {
  const response = await axios({
    method: "post",
    url: "/users/check/account",
    data: {
      account
    }
  });
  return response.data;
}