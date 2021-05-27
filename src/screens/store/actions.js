import * as action from './action-types';

export const fetchPostsRequest = (payload) => ({
  type: action.FETCH_POSTS_REQUEST,
  payload: payload,
});

export const fetchPostsSuccess = (payload) => ({
  type: action.FETCH_POSTS_SUCCESS,
  payload: payload,
});

export const fetchPostsFailure = (payload) => ({
  type: action.FETCH_POSTS_FAILURE,
  payload: payload,
});

export const fetchPostCommentsRequest = (payload) => ({
  type: action.FETCH_POST_COMMENTS_REQUEST,
  payload: payload,
});

export const fetchPostCommentsSuccess = (payload) => ({
  type: action.FETCH_POST_COMMENTS_SUCCESS,
  payload: payload,
});

export const fetchPostCommentsFailure = (payload) => ({
  type: action.FETCH_POST_COMMENTS_FAILURE,
  payload: payload,
});
