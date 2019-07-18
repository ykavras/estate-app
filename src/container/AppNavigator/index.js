import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { Animated, Easing } from "react-native";
import { Home } from "../../screens";

const StackNavigator = createStackNavigator(
  {
    Home
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
    Home
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootNavigator);