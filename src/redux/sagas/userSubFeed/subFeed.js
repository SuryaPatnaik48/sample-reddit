import {call, put} from 'redux-saga/effects';
import {getUserSubFeed} from '../../../service/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserSubFeed} from '../../subFeed/action';

export function* handleFetchUserSubFeed() {
  let userAuthToken = yield AsyncStorage.getItem('userAuthToken');
  userAuthToken = JSON.parse(userAuthToken).token;
  const response = yield getUserSubFeed(userAuthToken);
  yield put(setUserSubFeed(response));
}
