import React from 'react';
import {Text, View, Image} from 'react-native';
import AppActivityIndicator from '../common/AppActivityIndicator';
import globalStyles from '../styles';
import {Button} from 'galio-framework';
import {useSelector} from 'react-redux';

function UserProfile({navigation}) {
  const user = useSelector(
    state => state.fetchUserProfileReducer.userProfileData,
  );

  return (
    <View>
      <View>
        {!user ? (
          <AppActivityIndicator />
        ) : (
          <View style={globalStyles.profileContainer}>
            <View style={globalStyles.flexRow}>
              <Image
                style={globalStyles.profileAvatar}
                source={{uri: user.icon_img.split('?')[0]}}
              />
              <View>
                <Text style={globalStyles.profileName}>{user.name}</Text>
                <Text style={globalStyles.description}>
                  {user.subreddit.display_name_prefixed}
                </Text>
                <Text style={globalStyles.description}>
                  {user.created} ○ {user.total_karma} karma
                </Text>
              </View>
            </View>
            <Text style={globalStyles.followers}>
              {user.subreddit.subscribers} followers
            </Text>

            <View style={globalStyles.marginTop}>
              <Button
                onPress={() => navigation.navigate('SubFeed')}
                color="danger">
                <View>
                  <Text style={globalStyles.simpleText}>Go to feed</Text>
                </View>
              </Button>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default UserProfile;
