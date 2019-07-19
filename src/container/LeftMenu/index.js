import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import NavigationService from '../../lib/NavigatorService';
import styles from "./styles";
import Project from '../../assets/icons/Projects';
import About from '../../assets/icons/About';
import Contact from '../../assets/icons/Telephone';

class LeftMenu extends Component {
  goScreen = screen => {
    NavigationService.navigate(screen);
    this.props.drawer.current.close();
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.goScreen('Listing');
          }}
        >
          <Project style={styles.icon} />
          <Text style={styles.btnTitle}>Projeler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.goScreen('Home');
          }}
        >
          <About style={styles.icon} />
          <Text style={styles.btnTitle}>Hakkımızda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.goScreen('Home');
          }}
        >
          <Contact style={styles.icon} />
          <Text style={styles.btnTitle}>İletişim</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LeftMenu;
