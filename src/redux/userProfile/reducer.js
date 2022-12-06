import {userProfileActions} from './action.type';

const initialState = {
  userProfileData: null,
};

export const fetchUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case userProfileActions.FETCH_USER_DATA:
      return {
        state,
        userProfileData: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};
