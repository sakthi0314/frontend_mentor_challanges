const actiionType = {
  GET_POST_REQ: "GET_POST_REQ",
  GET_POST: "GET_POST",
  GET_POST_FAILED: "GET_POST_FAILED",
};

const getPostAction = () => (dispatch, getState) => {
  // console.log(getState);
};

const createPostAction = () => () => {};

export { actiionType, getPostAction, createPostAction };
