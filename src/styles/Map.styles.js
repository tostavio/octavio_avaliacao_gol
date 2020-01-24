import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Shadow } from '../constants/Shadow';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    borderColor: Colors.darkMediuGrey,
    flex: 4,
    marginBottom: 20,
    ...Shadow,
  },
  map: {
    flex: 1,
  },
});
