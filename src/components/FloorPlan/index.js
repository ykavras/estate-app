import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import BedIcon from '../../assets/icons/Bed';
import BathroomsIcon from '../../assets/icons/Bathrooms';
import RoomsIcon from '../../assets/icons/Rooms';
import GarageIcon from '../../assets/icons/Garage';

function FloorPlan(props) {
  const { } = props;
  return (
    <View style={styles.floorPlan}>
      <View style={styles.item}>
        <View style={styles.IconNumber}>
          <View style={styles.iconBox} >
            <BedIcon style={styles.icon} />
          </View>
          <Text style={styles.number}>2</Text>
        </View>
        <Text style={styles.name}>Yatak Odası</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.IconNumber}>
          <View style={styles.iconBox} >
            <BathroomsIcon style={styles.icon} />
          </View>
          <Text style={styles.number}>2</Text>
        </View>
        <Text style={styles.name}>Banyo</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.IconNumber}>
          <View style={styles.iconBox} >
            <RoomsIcon style={styles.icon} />
          </View>
          <Text style={styles.number}>3</Text>
        </View>
        <Text style={styles.name}>Oda</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.IconNumber}>
          <View style={styles.iconBox} >
            <GarageIcon style={styles.icon} />
          </View>
          <Text style={styles.number}>1</Text>
        </View>
        <Text style={styles.name}>Garaj</Text>
      </View>
    </View>
  );
}

FloorPlan.defaultProps = {
  title: 'Title'
};

export default FloorPlan;
