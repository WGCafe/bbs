import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './root-reducer';
import rootSaga from './root-saga';

import CommonUtil from '../utils/common-util';

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers;

if (!__DEV__) {
  composeEnhancers = compose;
} else {
  composeEnhancers = CommonUtil.getWindowObj().__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () => {
  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};