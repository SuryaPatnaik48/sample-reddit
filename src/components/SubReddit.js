/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import SubRedditFeed from './SubRedditFeed';
import AppActivityIndicator from '../common/AppActivityIndicator';
import globalStyles from '../styles';
import {getSubRedditInfoByName} from '../service/apiService';

function Subreddit({navigation, route}) {
  const {params} = route;

  const [SubReddit, setSubReddit] = useState({all: null});

  useEffect(() => {
    getSubRedditInfoByName(params.subredditName, setSubReddit);
  }, []);

  return (
    <View>
      <View>
        {!SubReddit.all ? (
          <AppActivityIndicator />
        ) : (
          <View style={globalStyles.padding}>
            <View>
              <View>
                <Text style={globalStyles.subRedditName}>
                  {SubReddit.all.data.display_name_prefixed}
                </Text>
                <Text style={globalStyles.detail}>
                  {SubReddit.all.data.subscribers} subscribers ○{' '}
                  {SubReddit.all.data.active_user_count} online
                </Text>
                <Text style={[globalStyles.second, globalStyles.marginTop]}>
                  {SubReddit.all.data.public_description}
                </Text>
              </View>
            </View>
            <View style={globalStyles.marginTop}>
              <SubRedditFeed
                subreddit={params.subredditName}
                navigation={navigation}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default Subreddit;
