import {View, Text} from 'react-native';
import React from 'react';
import globalStyles from '../styles';

const ProfileInfoCard = ({name, value}) => {
  return (
    <View style={globalStyles.padding}>
      <View style={globalStyles.profileInfoCard}>
        <Text style={globalStyles.textBoldLight}>{name}</Text>
        <Text style={globalStyles.simpleText}>{value}</Text>
      </View>
    </View>
  );
};

export default ProfileInfoCard;
