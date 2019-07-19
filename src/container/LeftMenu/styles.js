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
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnTitle: {
    fontFamily: theme.fontSemiBold,
    fontSize: 22,
    color: theme.colorWhite
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10
  }
})