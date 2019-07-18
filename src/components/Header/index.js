import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Menu from '../../assets/icons/Menu';

function Header(props) {
  const { onPress } = props;
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuBtn} onPress={onPress}>
        <Menu style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
