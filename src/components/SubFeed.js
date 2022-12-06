/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, ScrollView} from 'react-native';
import FeedCard from '../common/FeedCard';
import AppActivityIndicator from '../common/AppActivityIndicator';
import {useSelector} from 'react-redux';

function SubFeed({navigation}) {
  const subReddit = useSelector(state => state.fetchUserSubFeed.userSubFeed);

  return (
    <View>
      {!subReddit ? (
        <AppActivityIndicator />
      ) : (
        <ScrollView>
          {subReddit.data.children.map((item, index) => {
            return (
              <FeedCard
                key={item}
                navigation={navigation}
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

export default SubFeed;
