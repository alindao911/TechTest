import axios from 'axios';
import {Alert} from 'react-native';
import {takeLatest, put, call} from 'redux-saga/effects';
import {BASE_URL, POSTS, COMMENTS} from '../../api/config';

import * as actionTypes from './action-types';
import * as actions from './actions';

function* fetchPostsRequest() {
  try {
    const {data} = yield call([axios, axios.get], `${BASE_URL}${POSTS}`);

    yield put(actions.fetchPostsSuccess(data));
  } catch (error) {
    yield put(actions.fetchPostsFailure(error));
    Alert.alert('Error', error);
  }
}

function* fetchPostCommentsRequest({payload}) {
  try {
    const {data} = yield call(
      [axios, axios.get],
      `${BASE_URL}${COMMENTS}?postId=${payload}`,
    );

    yield put(actions.fetchPostCommentsSuccess(data));
  } catch (error) {
    yield put(actions.fetchPostCommentsFailure(error));
    Alert.alert('Error', error);
  }
}

export default [
  takeLatest(actionTypes.FETCH_POSTS_REQUEST, fetchPostsRequest),
  takeLatest(actionTypes.FETCH_POST_COMMENTS_REQUEST, fetchPostCommentsRequest),
];
