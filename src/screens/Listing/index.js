import React, { Component } from "react";
import { View, StatusBar, TextInput, ScrollView } from 'react-native';
import styles from "./styles";
import SearchSvg from "../../assets/icons/Search";
import theme from "../../lib/theme";
import { Category, Product, Header } from "../../components";

class Listing extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <View style={styles.content}>
          <View style={styles.shadow} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.searchWrapper}>
              <SearchSvg style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Hayalinizdeki konutu arayın"
                placeholderTextColor={theme.color2}
              />
            </View>
            <View>
              <ScrollView
                horizontal
                contentContainerStyle={styles.categoryListing}
                showsHorizontalScrollIndicator={false}
              >
                <Category title="Tümü" active />
                <Category title="Konut" />
                <Category title="Ofis" />
                <Category title="Ticari" />
                <Category title="Konut" />
                <Category title="Ofis" />
                <Category title="Ticari" />
              </ScrollView>
            </View>
            <View style={styles.products}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Product
                  name="Maslak 1453"
                  category="Toplu Konut"
                  distance="3.8"
                  image="https://www.pngarts.com/files/4/Building-PNG-Free-Download.png"
                  onPress={() => navigate("Detail")}
                />
                <Product
                  name="Esenyurt 2020"
                  category="Ofis"
                  distance="1.2"
                  image="https://i.ya-webdesign.com/images/transparent-building-condo-6.png"
                  onPress={() => navigate("Detail")}
                />
                <Product
                  name="Şişli 2022"
                  category="Konuk"
                  distance="4.1"
                  image="http://pngimg.com/uploads/building/building_PNG10.png"
                  onPress={() => navigate("Detail")}
                />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Listing;
