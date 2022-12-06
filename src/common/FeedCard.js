/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'react-native-elements';
import globalStyles from '../styles';
import Toast from 'react-native-simple-toast';

const GetSubRedditIcon = props => {
  const [SubReddit, setSubReddit] = useState({all: null});

  const options = {
    method: 'GET',
    url: 'https://www.reddit.com/r/' + props.subreddit + '/about.json',
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (res) {
        setSubReddit({
          all: res.data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {!SubReddit.all ? (
        <></>
      ) : (
        <Image
          style={globalStyles.subRedditCardAvatar}
          source={{uri: SubReddit.all.data.icon_img}}
        />
      )}
    </View>
  );
};

const FeedCard = ({item, index, navigation}) => {
  return (
    <View>
      <Card>
        <Pressable
          onPress={() => {
            if (item.data.num_comments > 0) {
              navigation.navigate('ArticleCommentsScreen', {
                subredditName: item.data.subreddit,
                articleId: item.data.id,
              });
            } else {
              Toast.show('No comments found');
            }
          }}
          key={index}
          style={globalStyles.feedCardView}>
          <Pressable
            onPress={() => {
              navigation.navigate('Subreddit', {
                subredditName: item.data.subreddit,
              });
            }}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <GetSubRedditIcon subreddit={item.data.subreddit} />
              </View>
              <View style={globalStyles.flexColumn}>
                <Text style={globalStyles.subRedditTitle}>
                  {item.data.subreddit_name_prefixed}
                </Text>
                <Text style={globalStyles.second}>
                  {item.data.author} ○ {item.data.created}
                </Text>
              </View>
            </View>
          </Pressable>
          <View style={globalStyles.alignItemsCenter}>
            <Text style={globalStyles.third}>{item.data.title}</Text>
            <Image
              style={{
                width: item.data.thumbnail_width * 2,
                height: item.data.thumbnail_height * 2,
                marginVertical: 10,
              }}
              resizeMode="cover"
              source={{uri: item.data.thumbnail}}
            />
          </View>
        </Pressable>
      </Card>
    </View>
  );
};

export default FeedCard;
