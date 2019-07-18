import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { Animated, Easing } from "react-native";
import { Home, Listing, Detail } from "../../screens";

const StackNavigator = createStackNavigator(
  {
    Home,
    Listing,
    Detail
  },
  {
    headerMode: "none",
    navigationOptions: { headerVisible: false },
    mode: "card",
    defaultNavigationOptions: {
      gesturesEnabled: true
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.ease
      }
    })
  }
);

const RootNavigator = createSwitchNavigator(
  {
    StackNavigator,
    Home,
    Listing,
    Detail
  },
  {
    initialRouteName: "Detail"
  }
);

export default createAppContainer(RootNavigator);
