import {combineReducers} from 'redux';
import feedbackReducer from '../common/reducers/feedback-reducer';
import articlesTypeReducer from '../pages/reducers/articles-type-reducer';

const rootReducers = combineReducers({
  feedback: feedbackReducer,
  articlesType: articlesTypeReducer
});

export default rootReducers;