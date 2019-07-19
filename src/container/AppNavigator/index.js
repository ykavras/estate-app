import React, { Component, createRef } from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import ScalingDrawer from 'react-native-scaling-drawer';
import { Home, Listing, Detail } from '../../screens';
import LeftMenu from '../LeftMenu';
import NavigatorService from '../../lib/NavigatorService';

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (focused ? null : null),
      }
    }
  },
  {
    tabBarOptions: {
      labelStyle: {
        display: "none"
      },
      style: {
        display: "none"
      }
    }
  }
);

const StackNavigator = createStackNavigator(
  {
    subNavigator: {
      screen: Tabs,
      navigationOptions: { header: null },
    },
    Home,
    Listing,
    Detail
  },
  {
    headerMode: "none",
    navigationOptions: { headerVisible: false },
    mode: "card",
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

const RootNavigator = createAppContainer(StackNavigator);

export const drawer = createRef();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.8,
  minimizeFactor: 0.5,
  swipeOffset: 20
};

class AppNavigation extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const { navigation } = this.props;
    /** Active Drawer Swipe * */
    if (nextProps.navigation.state.index === 0) {
      drawer.blockSwipeAbleDrawer(false);
    }

    if (
      nextProps.navigation.state.index === 0 &&
      navigation.state.index === 0
    ) {
      drawer.blockSwipeAbleDrawer(false);
      drawer.close();
    }

    /** Block Drawer Swipe * */
    if (nextProps.navigation.state.index > 0) {
      drawer.blockSwipeAbleDrawer(true);
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScalingDrawer
        ref={drawer}
        content={<LeftMenu drawer={drawer} navigation={navigation} />}
        {...defaultScalingDrawerConfig}
      >
        <RootNavigator
          ref={navigatorRef => {
            NavigatorService.setContainer(navigatorRef);
          }}
        />
      </ScalingDrawer>
    );
  }
}

export default AppNavigation;
