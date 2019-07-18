import { StyleSheet } from "react-native";
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  text: {
    fontFamily: theme.fontBlack,
    fontSize: 60,
    letterSpacing: 10,
    color: theme.colorWhite
  }
});
