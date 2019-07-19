import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.color5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15
  },
  btn: {
    opacity: 0.5
  },
  btnTitle: {
    fontFamily: theme.fontSemiBold,
    fontSize: 18,
    color: theme.colorWhite
  }
})