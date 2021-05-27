import {all} from 'redux-saga/effects';
import appSagas from '../screens/store/sagas';

export function* rootSaga() {
  yield all([...appSagas]);
}
