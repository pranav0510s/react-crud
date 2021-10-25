import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userDetailsReducer from "./reducers/userDetailsReducer";
import userListReducer from "./reducers/userListReducer";
import postDetailsReducer from "./reducers/postDetailsReducer";

const reducer = combineReducers({
  userList: userListReducer,
  userDetails: userDetailsReducer,
  postDetails: postDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
