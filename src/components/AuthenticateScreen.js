/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Button, StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from 'galio-framework';
import {getUserAccessToken} from '../service/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles';
import Toast from 'react-native-simple-toast';

const AuthenticateScreen = ({navigation}) => {
  useEffect(async () => {
    const token = await AsyncStorage.getItem('userAuthToken');
    console.log('userAuthToken', JSON.parse(token));
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.flexRow}>
        <ActivityIndicator size="large" color="red" />
        <Text muted style={globalStyles.marginHorizontal}>
          Authenticating
        </Text>
      </View>
    </View>
  );
};

export default AuthenticateScreen;
