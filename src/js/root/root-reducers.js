import {combineReducers} from 'redux';
import feedbackReducer from '../common/reducers/feedback-reducer';
import articleTypeReducer from '../pages/reducers/article-type-reducers';
import articleReducer from '../pages/reducers/article-reducers';

const rootReducers = combineReducers({
  feedback: feedbackReducer,
  articleType: articleTypeReducer,
  article: articleReducer
});

export default rootReducers;