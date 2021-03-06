import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

middlewares.push(sagaMiddleware);
const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
