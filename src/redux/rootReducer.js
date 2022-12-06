import {combineReducers} from 'redux';
import {fetchUserProfileReducer} from './userProfile/reducer';
import {fetchUserSubFeed} from './subFeed/reducer';

const rootReducer = combineReducers({
  fetchUserProfileReducer,
  fetchUserSubFeed,
});

export default rootReducer;
