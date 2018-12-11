import {combineReducers} from 'redux';
import feedbackReducer from '../../common/reducers/feedback-reducer';
import articlesTypeReducer from '../reducers/articles-type-reducer';

const rootReducers = combineReducers({
  feedback: feedbackReducer,
  articlesTypeReducer: articlesTypeReducer
});

export default rootReducers;