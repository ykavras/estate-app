import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';
import LocationSvg from '../../assets/icons/Location';

function Product(props) {
  const { name, category, distance, image, onPress } = props;
  return (
    <TouchableOpacity style={styles.product} onPress={onPress}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.dictance}>
          <LocationSvg style={styles.icon} /> Uzaklık: {distance} km
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Product.defaultProps = {
  name: 'Product Name',
  category: 'Product Category',
  distance: '3.2',
  image: 'https://www.pngarts.com/files/4/Building-PNG-Free-Download.png'
};

export default Product;
