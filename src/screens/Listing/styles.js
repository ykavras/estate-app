import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.color1,
    paddingTop: 120
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: theme.color2,
    shadowColor: theme.color4,
    shadowOffset: {
      width: 0,
      height: -6
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 12
  },
  searchWrapper: {
    backgroundColor: theme.color1,
    borderRadius: 15,
    shadowColor: theme.color4,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginTop: 30
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  searchInput: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 10,
    paddingVertical: 10,
    fontFamily: theme.fontSemiBold,
    fontSize: 14,
    color: theme.colorBlack,
    textAlign: 'left'
  },
  categoryListing: {
    paddingVertical: 30,
    paddingLeft: 15
  },
  products: {
    paddingBottom: 50
  }
})