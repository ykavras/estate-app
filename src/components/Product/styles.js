import { StyleSheet } from "react-native";
import theme from "../../lib/theme";

export default StyleSheet.create({
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 15
  },
  imageBox: {
    width: 160,
    height: 180,
    borderRadius: 15,
    backgroundColor: theme.color3,
    shadowColor: theme.colorBlack,
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    transform: [{ scale: 1.2 }]
  },
  content: {
    flex: 1,
    backgroundColor: theme.color1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: theme.colorBlack,
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8
  },
  title: {
    fontFamily: theme.fontSemiBold,
    color: theme.colorBlack,
    fontSize: 18
  },
  category: {
    fontFamily: theme.fontMedium,
    fontSize: 14,
    color: theme.colorBlack,
    paddingTop: 5,
    paddingBottom: 10,
    opacity: .8
  },
  dictance: {
    fontFamily: theme.fontMedium,
    fontSize: 14,
    color: theme.colorBlack,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .6
  },
  icon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginRight: 6
  }
});

