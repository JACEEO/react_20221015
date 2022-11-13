import axios from "axios";

export const postSignUp = async (name, email, password) => {
  try {
    const result = axios.post("http://101.101.218.43/users", {
      name,
      email,
      password,
    });

    return result;
  } catch (e) {
    throw new Error(e.response.status);
  }
};

export const postSignIn = async (email, password) => {
  try {
    const result = await axios.post("http://101.101.218.43/users/login", {
      email,
      password,
    });
    return result;
  } catch (e) {
    throw new Error(e.response.status);
  }
};

export const getPost = async (page) => {
  try {
    return await axios.get("http://101.101.218.43/posts/all/" + page);
  } catch (e) {
    throw new Error(e.response.status);
  }
};

export const postEdit = async (form) => {
  try {
    let result = await axios.post("http://101.101.218.43/posts", form, {
      headers: {
        "Content-Type": "mulipart/form-data",
      },
    });
    console.log(result);
  } catch (e) {}
};
