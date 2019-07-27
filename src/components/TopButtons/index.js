import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import BackIcon from '../../assets/icons/Back';
import HeartIcon from '../../assets/icons/Heart';

function TopButtons(props) {
	const { onPress1, onPress2 } = props;
	return (
		<View style={styles.topButtons}>
			<TouchableOpacity style={styles.button} onPress={onPress1}>
				<BackIcon fill="white" style={styles.buttonIcon}/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={onPress2}>
				<HeartIcon fill="white" style={styles.buttonIcon}/>
			</TouchableOpacity>
		</View>
	);
}

TopButtons.defaultProps = {};

export default TopButtons;
