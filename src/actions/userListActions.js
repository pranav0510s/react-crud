import { getAllUsers } from "../api";
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from "../constants/userListConstants";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const users = await getAllUsers();
    dispatch({ type: USER_LIST_SUCCESS, payload: users });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL, payload: error });
  }
};
