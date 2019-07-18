import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  categoryBtn: {
    marginRight: 30,
    marginLeft: -6
  },
  categoryIconBox: {
    borderRadius: 15,
    width: 60,
    height: 60,
    backgroundColor: theme.color1,
    padding: 10,
    shadowColor: theme.colorBlack,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
    marginHorizontal: 6
  },
  categorIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  categoryTitle: {
    marginTop: 6,
    fontFamily: theme.fontSemiBold,
    color: theme.colorBlack,
    opacity: 0.4,
    textAlign: 'center'
  },
  active: {
    backgroundColor: theme.color5
  },
  titleActive: {
    color: theme.color5,
    opacity: 1
  }
});