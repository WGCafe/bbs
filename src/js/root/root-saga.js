import {fork, all} from 'redux-saga/effects';

import feedbackSage from '../common/sagas/feedback-saga';
import articleTypeSaga from '../pages/sagas/article-type-sagas';
import articleSaga from '../pages/sagas/article-sagas';
import userSaga from '../pages/sagas/user-sagas';
import collectionSaga from '../pages/sagas/collection-sagas';
import messageSaga from '../pages/sagas/message-sagas';
import profileSaga from '../pages/sagas/profile-sagas';

export default function* root() {
  yield all([
    fork(feedbackSage),
    fork(articleTypeSaga),
    fork(articleSaga),
    fork(userSaga),
    fork(collectionSaga),
    fork(messageSaga),
    fork(profileSaga)
  ]);
}