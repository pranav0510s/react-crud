import { addComment, deleteCommentById, getCommentsForPost } from "../api";
import {
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  DELETE_COMMENT,
  ADD_COMMENT,
} from "../constants/postDetailsConstants";

export const getComments = (postId) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });

    const comments = await getCommentsForPost(postId);
    dispatch({ type: POST_DETAILS_SUCCESS, payload: comments });
  } catch (error) {
    dispatch({ type: POST_DETAILS_FAIL, payload: error });
  }
};

export const deleteComment = (commentId) => async (dispatch) => {
  try {
    await deleteCommentById(commentId);
    dispatch({ type: DELETE_COMMENT, payload: commentId });
  } catch (error) {
    dispatch({ type: POST_DETAILS_FAIL, payload: error });
  }
};

export const createComment = (postId, name, email, body) => async (
  dispatch
) => {
  try {
    const comment = await addComment(postId, name, email, body);
    dispatch({ type: ADD_COMMENT, payload: comment });
  } catch (error) {
    dispatch({ type: POST_DETAILS_FAIL, payload: error });
  }
};
