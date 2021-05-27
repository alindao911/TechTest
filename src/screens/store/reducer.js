import * as actions from './action-types';

const initialState = {
  posts: [],
  comments: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.FETCH_POSTS_SUCCESS: {
      return Object.assign({}, state, {posts: payload});
    }
    case actions.FETCH_POSTS_FAILURE: {
      return Object.assign({}, state, {posts: []});
    }
    case actions.FETCH_POST_COMMENTS_SUCCESS: {
      return Object.assign({}, state, {comments: payload});
    }
    case actions.FETCH_POST_COMMENTS_FAILURE: {
      return Object.assign({}, state, {comments: []});
    }
    default:
      return state;
  }
};
