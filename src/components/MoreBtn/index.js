import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function MoreBtn(props) {
	const { title, onPress } = props;
	return (
		<TouchableOpacity style={styles.readMore} onPress={onPress}>
			<Text style={styles.readMoreTitle}>{title}</Text>
		</TouchableOpacity>
	);
}

MoreBtn.defaultProps = {
	title: ''
};

export default MoreBtn;
