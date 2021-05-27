import {combineReducers} from 'redux';
import {loadingReducer} from '../common/ReduxLoader';
import appReducer from '../screens/store/reducer';

export default combineReducers({
  app: appReducer,
  loading: loadingReducer,
});
