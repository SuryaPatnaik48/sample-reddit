/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import FeedCard from '../common/FeedCard';
import AppActivityIndicator from '../common/AppActivityIndicator';
import {getSubRedditFeedByName} from '../service/apiService';

function SubRedditFeed(props) {
  const [SubReddit, setSubReddit] = useState({all: null});

  useEffect(() => {
    getSubRedditFeedByName(props.subreddit, setSubReddit);
  }, []);

  return (
    <View>
      {!SubReddit.all ? (
        <AppActivityIndicator />
      ) : (
        <ScrollView>
          {SubReddit.all.data.children.map((item, index) => {
            return (
              <FeedCard
                key={item}
                navigation={props.navigation}
                item={item}
                index={index}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

export default SubRedditFeed;
