import {subFeedActions} from './action.type';

export const setUserSubFeed = subFeed => {
  return {
    type: subFeedActions.FETCH_USER_SUB_FEED,
    data: subFeed,
  };
};
