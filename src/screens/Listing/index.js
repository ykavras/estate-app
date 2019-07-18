import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import styles from './styles';
import SearchSvg from '../../assets/icons/Search'
import theme from '../../lib/theme';
import { Category } from '../../components';

class Listing extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.content}>
          <View style={styles.searchWrapper}>
            <SearchSvg style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Hayalinizdeki konutu arayın"
              placeholderTextColor={theme.color3}
            />
          </View>
          <View style={styles.categoryWrapper}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.categoryListing}
              showsHorizontalScrollIndicator={false}
            >
              <Category title="Tümü" active />
              <Category title="Konuk" />
              <Category title="Ofis" />
              <Category title="Ticari" />
              <Category title="Konuk" />
              <Category title="Ofis" />
              <Category title="Ticari" />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

export default Listing;
