import { combineReducers } from "redux";

// Init state
const initState = {
  posts: ["1", "2"],
  isLoading: false,
  error: null,
};

const getPostsReducers = (state = initState, { type, paylaod }) => {
  switch (type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  getPosts: getPostsReducers,
});

export { rootReducer };
