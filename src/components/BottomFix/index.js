import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import DetailImage from '../../assets/img/detail-img.jpg';
import MessageIcon from '../../assets/icons/Message';
import theme from '../../lib/theme';
import CallIcon from '../../assets/icons/Call';

function BottomFix(props) {
	const {} = props;
	return (
		<View style={styles.bottomFix}>
			<View style={styles.bottomFixInfo}>
				<Image source={DetailImage} style={styles.bottomFixInfoImg}/>
				<Text style={styles.bottomFixInfoText}>Ege Yapım</Text>
			</View>
			<View style={styles.bottomFixBtns}>
				<TouchableOpacity style={[styles.bottomFixBtn, { marginRight: 10 }]}>
					<MessageIcon fill={theme.color8} style={styles.bottomFixBtnIcon}/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.bottomFixBtn}>
					<CallIcon fill={theme.color8} style={styles.bottomFixBtnIcon}/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

BottomFix.defaultProps = {};

export default BottomFix;
