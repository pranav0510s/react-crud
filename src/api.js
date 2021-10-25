import axios from "axios";

export const getAllUsers = async () => {
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const getPostsForUser = async (userId) => {
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const getUserById = async (userId) => {
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const getCommentsForPost = async (postId) => {
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const getPostById = async (postId) => {
  try {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const addPost = async (userId, title, body) => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title,
        body,
        userId,
      }
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const editPost = async (userId, title, body) => {
  try {
    const { data } = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title,
        body,
        userId,
      }
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const addComment = async (postId, name, email, body) => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/comments",
      {
        email,
        name,
        body,
        postId,
      }
    );
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const deletePostById = async (postId) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  } catch (error) {
    throw Error(error);
  }
};

export const deleteCommentById = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
  } catch (error) {
    throw Error(error);
  }
};
