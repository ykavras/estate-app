import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import NavigationService from '../../lib/NavigatorService';
import styles from "./styles";

class LeftMenu extends Component {
  render() {
    console.log(this.props)
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            NavigationService.navigate('Home');
            this.props.drawer.current.close();
          }}
        >
          <Text style={styles.btnTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            NavigationService.navigate('Listing');
            this.props.drawer.current.close();
          }}
        >
          <Text style={styles.btnTitle}>Listing</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LeftMenu;
