import {takeLatest, all} from 'redux-saga/effects';
import {handleFetchUser} from './userProfile/profile';
import {handleFetchUserSubFeed} from './userSubFeed/subFeed';

export function* watcherSaga() {
  yield all([
    takeLatest('FETCH_USER_PROFILE', handleFetchUser),
    takeLatest('FETCH_USER_SUB_FEED', handleFetchUserSubFeed),
  ]);
}
