import {combineReducers} from 'redux';
import feedbackReducer from '../common/reducers/feedback-reducer';
import articleTypeReducer from '../pages/reducers/article-type-reducers';
import articleReducer from '../pages/reducers/article-reducers';
import operationReducer from '../pages/reducers/operation-reducers';
import messageReducer from '../pages/reducers/message-reducers';

const rootReducers = combineReducers({
  feedback: feedbackReducer,
  articleType: articleTypeReducer,
  article: articleReducer,
  operation: operationReducer,
  message: messageReducer
});

export default rootReducers;