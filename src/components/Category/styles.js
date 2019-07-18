import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  categoryBtn: {
    marginRight: 30
  },
  categoryIconBox: {
    borderRadius: 15,
    width: 60,
    height: 60,
    backgroundColor: theme.color1,
    padding: 10,
    shadowColor: theme.color4,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4
  },
  categorIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  categoryTitle: {
    marginTop: 6,
    fontFamily: theme.fontSemiBold,
    color: theme.color4,
    textAlign: 'center'
  },
  active: {
    backgroundColor: theme.color4
  },
  titleActive: {
    color: theme.colorBlack
  }
});