import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/CityOverview.styles';
import Loading from './Loading';

const refreshImage = require('../../assets/refresh.png');

export default function CityOverview({
  cityName = '',
  weather = '',
  scale,
  onRrefresh,
}) {
  return (
    <View style={styles.wrapper}>
      {!!cityName && !!weather ? (
        <>
          <View style={styles.refreshImageContainer}>
            <TouchableOpacity onPress={onRrefresh}>
              <Image
                resizeMode="contain"
                source={refreshImage}
                style={styles.refreshImage}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.cityName}>{cityName}</Text>
          <Text style={styles.weather}>
            {scale
              ? `${Math.ceil((weather * 9) / 5 + 32)}° F`
              : `${weather}° C`}
          </Text>
        </>
      ) : (
        <Loading />
      )}
    </View>
  );
}
