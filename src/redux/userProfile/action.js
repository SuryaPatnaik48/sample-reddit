import {userProfileActions} from './action.type';

export const getUserProfileDetails = userData => {
  return {
    type: userProfileActions.FETCH_USER_DATA,
    data: userData,
  };
};
