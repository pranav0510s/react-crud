import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  DELETE_POST,
  ADD_POST,
} from "../constants/userDetailsConstants";

const reducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case ADD_POST:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
