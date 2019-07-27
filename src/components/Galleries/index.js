import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import DetailImage from "../../assets/img/detail-img.jpg";
import LinearGradient from "react-native-linear-gradient";
import theme from "../../lib/theme";
import BackIcon from "../../assets/icons/Back";

function Galleries(props) {
	const {} = props;
	return (
		<View style={styles.gallery}>
			<View style={styles.galleryBox}>
				<TouchableOpacity style={styles.galleryImgBtn}>
					<Image source={DetailImage} style={styles.galleryImg}/>
				</TouchableOpacity>
			</View>
			<View style={[styles.galleryBox, styles.galleryBoxSmall]}>
				<TouchableOpacity style={[styles.galleryImgBtn, styles.galleryImgBtnSmall]}>
					<Image source={DetailImage} style={styles.galleryImg}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.galleryImgBtn, styles.galleryImgBtnSmall]}>
					<Image source={DetailImage} style={styles.galleryImg}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.galleryImgBtn, styles.galleryImgBtnSmall]}>
					<Image source={DetailImage} style={styles.galleryImg}/>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.galleryImgBtn, styles.galleryImgBtnSmall]}>
					<LinearGradient style={styles.moreImgBox} colors={[theme.color2, theme.color8]}>
						<View style={styles.moreImageIconBox}>
							<BackIcon fill="white" style={styles.moreImageIcon}/>
						</View>
						<Text style={styles.moreImgCount}>21 daha</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	);
}

Galleries.defaultProps = {};

export default Galleries;
