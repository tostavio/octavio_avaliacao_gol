import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { Shadow } from '../constants/Shadow';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.darkMediuGrey,
    flex: 4,
    marginBottom: 40,
    padding: 8,
    backgroundColor: Colors.white,
    ...Shadow,
  },
  itemRow: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.underlineGrey,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  itemDate: {
    flex: 7,
    fontSize: 16,
    textAlign: 'left',
  },
  itemWeather: {
    flex: 7,
    fontSize: 16,
    textAlign: 'center',
  },
  itemIconContainer: {
    flex: 9,
    alignItems: 'flex-end',
    ...Shadow,
  },
  itemIcon: {
    height: 24,
    width: 24,
  },
});
