import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const AppActivityIndicator = () => {
  return (
    <View
      style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator
        style={{height: '100%'}}
        size="large"
        color="#ffa31a"
      />
    </View>
  );
};

export default AppActivityIndicator;
