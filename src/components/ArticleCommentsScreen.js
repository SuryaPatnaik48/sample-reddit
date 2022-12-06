/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../styles';
import AppActivityIndicator from '../common/AppActivityIndicator';
import {Card} from 'react-native-elements';
import {getSubRedditComments} from '../service/apiService';

const ArticleCommentsScreen = ({route}) => {
  const {params} = route;
  console.log('params', params);
  const [articleInfo, setArticeInfo] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    getSubRedditComments(
      params.subredditName,
      params.articleId,
      setArticeInfo,
      setComments,
    );
  }, []);

  return !(comments && articleInfo) ? (
    <AppActivityIndicator />
  ) : (
    <View style={[globalStyles.padding]}>
      <View style={[globalStyles.flexRow]}>
        <Text style={globalStyles.subRedditTitle}>{articleInfo.title}</Text>
      </View>

      <View style={[globalStyles.marginTop, {height: '90%'}]}>
        <ScrollView>
          <View>
            {comments &&
              comments.length > 0 &&
              comments.map(({data: commentObj}) => {
                return (
                  <Card key={commentObj.id}>
                    <View style={globalStyles.padding}>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Image
                            style={globalStyles.subRedditCardAvatar}
                            source={{
                              uri: 'https://thumbs.dreamstime.com/b/charminar-hyderabad-india-view-icon-builiding-42242588.jpg',
                            }}
                          />
                        </View>
                        <View style={globalStyles.marginHorizontal}>
                          <Text style={globalStyles.subRedditTitle}>
                            {commentObj.author}
                          </Text>
                          <Text
                            style={[
                              globalStyles.second,
                              globalStyles.marginTop,
                            ]}>
                            {commentObj.body}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Card>
                );
              })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ArticleCommentsScreen;
