import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Amenities(props) {
	const {} = props;
	return (
		<View style={styles.properties}>
			<Text style={styles.properTitle}>Kolaylıklar</Text>
			<View style={styles.properList}>
				<Text style={styles.property}>• Barbeque</Text>
				<Text style={styles.property}>• Dryer</Text>
				<Text style={styles.property}>• Barbeque</Text>
				<Text style={styles.property}>• Dryer</Text>
				<Text style={styles.property}>• Window Covering</Text>
				<Text style={styles.property}>• Refrigerator</Text>
			</View>
		</View>
	);
}

Amenities.defaultProps = {};

export default Amenities;
