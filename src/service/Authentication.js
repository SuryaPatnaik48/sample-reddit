/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, {useCallback, useEffect} from 'react';
import {authorize} from 'react-native-app-auth';
import {redditOauth2Config} from './config';
import {Buffer} from 'buffer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchSubFeed, fetchUserProfile} from '../redux/sagas/sagaActions';
import {useDispatch} from 'react-redux';

function Authentication({navigation}) {
  const dispatch = useDispatch();
  const encodedHeader = Buffer.from(`${redditOauth2Config.clientId}`).toString(
    'base64',
  );

  const config = {
    redirectUrl: redditOauth2Config.redirectUrl,
    clientId: redditOauth2Config.clientId,
    clientSecret: redditOauth2Config.clientSecret,
    scopes: [
      'identity',
      'edit',
      'subscribe',
      'save',
      'submit',
      'read',
      'modconfig',
      'account',
      'vote',
      'flair',
      'mysubreddits',
    ],
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
      tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    },
    customHeaders: {
      token: {
        Authorization: 'Basic ' + encodedHeader,
      },
    },
  };

  const Auth = useCallback(async call => {
    try {
      const authState = await authorize(config);
      AsyncStorage.setItem(
        'userAuthToken',
        JSON.stringify({
          token: authState.accessToken,
          tokenExpiration: authState.accessTokenExpirationDate,
          refreshToken: authState.refreshToken,
        }),
      );
      dispatch(fetchUserProfile());
      dispatch(fetchSubFeed());
      navigation.navigate('UserProfile');
    } catch (e) {
      console.log('Auth err', e);
    }
  });

  useEffect(() => {
    Auth();
  }, []);

  return <></>;
}

export default Authentication;
