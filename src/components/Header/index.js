import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Menu from '../../assets/icons/Menu';
import { drawer } from '../../container/AppNavigator/index';

function Header(props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => {
          drawer.current.open();
        }}
      >
        <Menu style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
