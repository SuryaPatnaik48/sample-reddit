import {put} from 'redux-saga/effects';
import {getUserProfileData} from '../../../service/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserProfileDetails} from '../../userProfile/action';

export function* handleFetchUser() {
  let userAuthToken = yield AsyncStorage.getItem('userAuthToken');
  userAuthToken = JSON.parse(userAuthToken).token;
  const response = yield getUserProfileData(userAuthToken);
  yield put(getUserProfileDetails(response));
}
