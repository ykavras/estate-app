import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BuildSvg from '../../assets/icons/Skyline';
import styles from './styles';
import theme from '../../lib/theme';

function Category(props) {
  const { title, onPress, active } = props;
  return (
    <TouchableOpacity style={styles.categoryBtn} onPress={onPress}>
      <View style={[styles.categoryIconBox, active ? styles.active : null]}>
        <BuildSvg
          fill={active ? "white" : theme.color3}
          style={styles.categorIcon}
        />
      </View>
      <Text style={[styles.categoryTitle, active ? styles.titleActive : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Category.defaultProps = {
  title: 'Title'
};

export default Category;
