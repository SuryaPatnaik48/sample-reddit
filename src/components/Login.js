import React from 'react';
import {View, Linking, Text, Image} from 'react-native';
import {app_urls} from '../service/appUrls';
import {Button} from 'galio-framework';
import globalStyles from '../styles';

export default function Login({navigation}) {
  return (
    <View style={globalStyles.container}>
      <View>
        <Image
          style={globalStyles.redditImg}
          resizeMode={'center'}
          source={require('../assets/images/redditLogo.png')}
        />
      </View>

      <Button
        onPress={() => navigation.navigate('Authentication')}
        color="danger">
        <View>
          <Text style={globalStyles.simpleText}>Login with Reddit</Text>
        </View>
      </Button>

      <Text style={globalStyles.marginTop}>
        Please allow reddit authentication to proceed further
      </Text>

      {/* <Button
        onPress={() => Linking.openURL(app_urls.redditOauth)}
        color="danger">
        <View>
          <Text style={globalStyles.simpleText}>Login with Reddit</Text>
        </View>
      </Button> */}

      {/* <Text style={globalStyles.marginTop}>Made with ❤ by Surya</Text> */}
    </View>
  );
}
