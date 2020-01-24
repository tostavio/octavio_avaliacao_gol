import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, SafeAreaView, StatusBar, View } from 'react-native';
import CityOverview from '../components/CityOverview';
import Map from '../components/Map';
import ScaleSwitch from '../components/ScaleSwitch';
import WeatherInfo from '../components/WeatherInfo';
import { api } from '../services/Api';
import { styles } from '../styles/HomeScreen.styles';

const DISTANCE_FILTER = 20;
const GEOLOCATION_CONFIG = {
  timeout: 5000,
  maximumAge: 0,
  enableHighAccuracy: true,
  distanceFilter: DISTANCE_FILTER,
  useSignificantChanges: false,
};
export default function HomeScreen() {
  const [scale, setScale] = useState(false);
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const [forecasts, setForecasts] = useState(null);

  const getLocation = useCallback(async ({ lat, long }) => {
    try {
      const response = await api.get(`/search/?lattlong=${lat},${long}`);
      setLocation(response.data[0]);
    } catch (error) {
      Alert.alert(
        'Something is wrong',
        'We had problems to get weather forecast. Verify if your Location is turned on or your network is active.'
      );
    }
  }, []);

  const getForecasts = useCallback(async ({ woeid }) => {
    try {
      const response = await api.get(`/location/${woeid}`);
      setForecasts(response.data.consolidated_weather);
    } catch (error) {
      Alert.alert(
        'Something is wrong',
        'We had problems to get weather forecast. Verify if your Location is turned on or your network is active.'
      );
    }
  }, []);

  const watchPosition = useCallback(async () => {
    return Geolocation.watchPosition(
      pos => {
        setRegion({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.5,
        });
      },
      e => {
        if (e.code === 3 || e.code === 1) {
          Alert.alert(
            'Something is wrong',
            'We had problems to get your location. Verify if your Location is active or if you granted location permission.'
          );
        }
      },
      { ...GEOLOCATION_CONFIG }
    );
  }, []);

  useEffect(() => {
    Geolocation.requestAuthorization();
    const watchId = watchPosition();
    return () => Geolocation.clearWatch(watchId);
  }, [Geolocation, watchPosition]);

  useEffect(() => {
    if (!region) return;
    getLocation({
      lat: region.latitude,
      long: region.longitude,
    });
  }, [region, getLocation]);

  useEffect(() => {
    if (!location) return;
    getForecasts({ woeid: location.woeid });
  }, [location, getForecasts]);
  const today = moment(new Date()).format('YYYY-MM-DD');
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <CityOverview
          cityName={location && location.title}
          weather={forecasts && Math.ceil(forecasts[0].the_temp)}
          scale={scale}
          onRrefresh={() => {
            if (!region) return;
            getLocation({
              lat: region.latitude,
              long: region.longitude,
            });
          }}
        />
        <Map region={region} />
        <WeatherInfo
          scale={scale}
          forecasts={
            forecasts &&
            forecasts.filter(item => item.applicable_date !== today)
          }
        />
        <ScaleSwitch onChangeScale={setScale} scale={scale} />
      </SafeAreaView>
    </View>
  );
}
