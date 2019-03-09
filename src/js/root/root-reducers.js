import {combineReducers} from 'redux';
import feedbackReducer from '../common/reducers/feedback-reducer';
import articleTypeReducer from '../pages/reducers/article-type-reducers';
import articlesReducer from '../pages/reducers/article-reducers';
import commentReducers from '../pages/reducers/comment-reducers';
import userReducer from '../pages/reducers/user-reducer';
import collectionReducer from '../pages/reducers/collection-reducers';
import messageReducer from '../pages/reducers/message-reducers';
import profileReducer from '../pages/reducers/profile-reducers';

const rootReducers = combineReducers({
  feedback: feedbackReducer,
  articleType: articleTypeReducer,
  articles: articlesReducer,
  comments: commentReducers,
  user: userReducer,
  collection: collectionReducer,
  message: messageReducer,
  profile: profileReducer
});

export default rootReducers;