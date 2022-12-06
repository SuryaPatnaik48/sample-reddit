import axios from 'axios';
import {app_urls} from './appUrls';
import {redditOauth2Config} from './config';
import {Buffer} from 'buffer';

const encodedHeader = Buffer.from(`${redditOauth2Config.clientId}`).toString(
  'base64',
);

const headers = {
  Authorization: `Basic ${encodedHeader}`,
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const getUserAccessToken = code => {
  const url = app_urls.access_token;
  const info = `grant_type=authorization_code&code=${code}&redirect_uri=${redditOauth2Config.redirectUrl}`;

  console.log('getAccessToken data', {
    url,
    info,
    headers,
  });

  axios
    .post(url, info, headers)
    .then(res => {
      console.log('getUserAccessToken', res);
    })
    .catch(err => {
      console.log('getUserAccessToken err', err);
    });
};

export const getUserProfileData = (userAuthToken, callback) => {
  const headerConfig = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer ' + userAuthToken,
  };

  return axios
    .get(app_urls.me, {headers: headerConfig})
    .then(function (res) {
      console.log('reddit userData res', res);
      callback &&
        callback({
          all: res.data,
        });

      return res.data;
    })
    .catch(function (error) {
      console.error('reddit user err', error);
      return null;
    });
};

export const getUserSubFeed = (userAuthToken, callback) => {
  const headerConfig = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer ' + userAuthToken,
  };

  return axios
    .get(app_urls.subFeed, {headers: headerConfig})
    .then(function (res) {
      callback &&
        callback({
          all: res.data,
        });
      console.log('subreddit data', res.data);
      return res.data;
    })
    .catch(function (error) {
      console.error(error);
      return null;
    });
};

export const getSubRedditInfoByName = (subRedditName, callback) => {
  axios
    .get('https://www.reddit.com/r/' + subRedditName + '/about.json')
    .then(function (res) {
      callback({
        all: res.data,
      });
      console.log('getSubRedditInfoByName data', res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getSubRedditFeedByName = (subRedditName, callback) => {
  axios
    .get('https://www.reddit.com/r/' + subRedditName + '.json')
    .then(function (res) {
      callback({
        all: res.data,
      });
      console.log('getSubRedditFeedByName data', res.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getSubRedditComments = (
  subRedditName,
  articleId,
  setArticeInfo,
  setComments,
) => {
  axios
    .get(
      'https://www.reddit.com/r/' +
        subRedditName +
        `/comments/${articleId}.json`,
    )
    .then(function (res) {
      console.log('getSubRedditComments', res.data);
      setArticeInfo(res.data[0].data.children[0].data);
      setComments(res.data[1].data.children);
    })
    .catch(function (error) {
      console.error(error);
    });
};
