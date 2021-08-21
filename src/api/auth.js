import axios from "axios";

export const login = async ({ email, password }) => {
  const response = await axios({
    method: "post",
    url: "/users/login",
    data: {
      email,
      password,
    },
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios({
    method: "post",
    url: "/users/logout",
  });
  return null;
};

export const signup = async ({ email, password, name, nickname }) => {
  const response = await axios({
    method: "post",
    url: "users/signup", // url 수정 예정
    data: {
      email,
      name,
      password,

    },
  });
  return response.data;
};
