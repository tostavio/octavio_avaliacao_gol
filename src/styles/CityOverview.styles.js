import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: '600',
  },
  weather: {
    fontSize: 22,
    fontWeight: '500',
    marginTop: 15,
  },
  refreshImage: {
    height: 28,
    width: 28,
  },
  refreshImageContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
});
