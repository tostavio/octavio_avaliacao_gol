import React from 'react';
import { Switch, Text, View } from 'react-native';
import { styles } from '../styles/ScaleSwitch.styles';

export default function ScaleSwitch({ onChangeScale, scale }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.scaleText}>celsius / fahrenheit</Text>
      <Switch
        style={styles.switch}
        onValueChange={onChangeScale}
        value={scale}
      />
    </View>
  );
}
