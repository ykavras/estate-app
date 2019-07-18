import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../lib/theme';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    fontFamily: theme.fontBlack,
    fontSize: 60,
    letterSpacing: 10,
    color: theme.colorWhite
  },
  building: {
    position: 'absolute',
    width: width - 40,
    height: height / 2,
    resizeMode: 'contain',
    opacity: 0.3
  }
});
