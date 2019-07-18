import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { example } from "../../store/actions/example";
import PropTypes from "prop-types";
import BuildingIcon from "../../assets/icons/Skyline";

class Home extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Listing");
    }, 100);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.text}>ESTATE</Text>
        <BuildingIcon fill="#FFFFFF" style={styles.building} />
      </View>
    );
  }
}

Home.propTypes = {
  example: PropTypes.func.isRequired,
  exampleToProps: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    exampleToProps: state.exampleReducer,
  };
};

export default connect(
  mapStateToProps,
  { example }
)(Home);
