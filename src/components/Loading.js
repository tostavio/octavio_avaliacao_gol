import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { styles } from '../styles/Loading.styles';

export default function Loading({ isActive = true }) {
  if (!isActive) return null;
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="small" color={Colors.tuscany} />
    </View>
  );
}
