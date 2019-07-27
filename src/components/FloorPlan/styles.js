import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  floorPlan: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginVertical: 10
  },
  item: {
    flex: 1
  },
  IconNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconBox: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  number: {
    fontFamily: theme.fontMedium,
    color: theme.color7,
    fontSize: 22,
    paddingLeft: 10
  },
  name: {
    fontFamily: theme.fontLight,
    color: theme.color7,
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 4,
    opacity: 0.6
  },
});