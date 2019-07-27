import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import DetailImage from '../../assets/img/detail-img.jpg';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../lib/theme';
import CubeIcon from '../../assets/icons/Cube';

function ImageDetail(props) {
	const {} = props;
	return (
		<View style={styles.imgWrapper}>
			<Image source={DetailImage} style={styles.img}/>
			<LinearGradient style={styles.imgFooter} colors={['transparent', theme.color7]}>
				<Text style={styles.price}>250.000 ₺</Text>
				<TouchableOpacity style={styles.btn360}>
					<Text style={styles.btn360Title}>360 Görünüm</Text>
					<CubeIcon fill="black" style={styles.btn360Icon}/>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
}

ImageDetail.defaultProps = {};

export default ImageDetail;
