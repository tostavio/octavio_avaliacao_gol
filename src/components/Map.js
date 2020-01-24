import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { styles } from '../styles/Map.styles';
import Loading from './Loading';

export default function Map({ region }) {
  return (
    <View style={styles.wrapper}>
      {!region ? (
        <Loading />
      ) : (
        <MapView
          style={styles.map}
          region={region}
          loadingEnabled
          zoomEnabled={false}
          zoomControlEnabled={false}
          pitchEnabled={false}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}
