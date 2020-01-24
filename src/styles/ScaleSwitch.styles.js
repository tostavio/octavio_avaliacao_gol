import { StyleSheet } from 'react-native';
import { Shadow } from '../constants/Shadow';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scaleText: {
    fontSize: 16,
  },
  switch: { ...Shadow },
});
