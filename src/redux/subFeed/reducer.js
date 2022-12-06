import {subFeedActions} from './action.type';

const initialState = {
  userSubFeed: null,
};

export const fetchUserSubFeed = (state = initialState, action) => {
  switch (action.type) {
    case subFeedActions.FETCH_USER_SUB_FEED:
      return {
        ...state,
        userSubFeed: action.data,
      };

    default:
      return {
        ...state,
      };
  }
};
