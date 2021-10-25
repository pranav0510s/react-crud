import { getPostsForUser, deletePostById, addPost } from "../api";
import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  DELETE_POST,
  ADD_POST,
  EDIT_POST

} from "../constants/userDetailsConstants";

export const getPosts = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const posts = await getPostsForUser(userId);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: posts });
  } catch (error) {
    dispatch({ type: USER_DETAILS_FAIL, payload: error });
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await deletePostById(postId);
    dispatch({ type: DELETE_POST, payload: postId });
  } catch (error) {
    alert(error);
  }
};

export const createPost = (userId, title, body) => async (dispatch) => {
  try {
    const post = await addPost(userId, title, body);
    dispatch({ type: ADD_POST, payload: post });
  } catch (error) {
    throw Error(error);
  }
};

export const editPost = (userId, title, body) => async (dispatch) => {
  try {
    const post = await editPost(userId, title, body);
    dispatch({ type: EDIT_POST, payload: post });
  } catch (error) {
    throw Error(error);
  }
};
