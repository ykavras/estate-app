import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { Animated, Easing } from "react-native";
import { Home, Listing } from "../../screens";

const StackNavigator = createStackNavigator(
  {
    Home,
    Listing
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
    Listing
  },
  {
    initialRouteName: "Listing"
  }
);

export default createAppContainer(RootNavigator);
