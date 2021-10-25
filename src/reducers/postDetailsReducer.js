import {
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  DELETE_COMMENT,
  CLEAR_POST_DETAILS,
  ADD_COMMENT,
} from "../constants/postDetailsConstants";

const reducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { ...state, loading: true };
    case POST_DETAILS_SUCCESS:
      return {
        loading: false,
        comments: action.payload,
      };
    case POST_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (COMMENT) => COMMENT.id !== action.payload
        ),
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case CLEAR_POST_DETAILS:
      return { comments: [] };
    default:
      return state;
  }
};

export default reducer;
