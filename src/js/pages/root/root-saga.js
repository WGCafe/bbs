import {fork, all} from 'redux-saga/effects';

import feedbackSage from '../../common/sagas/feedback-saga';
import articlesTypeSaga from '../sagas/articles-type-saga';

export default function* root() {
  yield all([
    fork(feedbackSage),
    fork(articlesTypeSaga)
  ]);
}