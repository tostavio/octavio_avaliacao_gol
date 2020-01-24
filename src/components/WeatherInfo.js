import moment from 'moment';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from '../styles/WeatherInfo.styles';
import Loading from './Loading';

function WeatherInfoItem({ forecast, isLastItem, scale }) {
  const formatedWeather = Math.ceil(forecast.the_temp);
  const date = moment(forecast.applicable_date).format('DD/MM');
  return (
    <View style={[styles.itemRow, { borderBottomWidth: isLastItem ? 0 : 1 }]}>
      <Text style={styles.itemDate}>{date}</Text>
      <Text style={styles.itemWeather}>
        {scale
          ? `${Math.ceil((formatedWeather * 9) / 5 + 32)}° F`
          : `${formatedWeather}° C`}
      </Text>
      <View style={styles.itemIconContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: `https://www.metaweather.com/static/img/weather/png/${forecast.weather_state_abbr}.png`,
          }}
          style={styles.itemIcon}
        />
      </View>
    </View>
  );
}

export default function WeatherInfo({ forecasts, scale, getForecasts }) {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={forecasts}
        refreshing={!!forecasts}
        onRefresh={getForecasts}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item, index }) => (
          <WeatherInfoItem
            scale={scale}
            forecast={item}
            isLastItem={index === forecasts.length - 1}
          />
        )}
        ListEmptyComponent={<Loading />}
      />
    </View>
  );
}
