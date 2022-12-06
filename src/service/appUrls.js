import {redditOauth2Config} from './config';

const baseUrl = 'https://www.reddit.com/api/v1/';
const oauthBaseUrl = 'https://oauth.reddit.com/api/v1/';

export const app_urls = {
  redditOauth:
    baseUrl +
    `authorize?client_id=${redditOauth2Config.clientId}&response_type=code&state=${redditOauth2Config.state}&redirect_uri=${redditOauth2Config.redirectUrl}&duration=${redditOauth2Config.duration}&scope=identity,submit,save`,

  access_token: baseUrl + 'access_token',
  me: oauthBaseUrl + 'me',
  subFeed: 'https://oauth.reddit.com/' + 'top' + '.json',
};
