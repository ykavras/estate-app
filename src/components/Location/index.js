import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import MapView, { Marker } from 'react-native-maps';
import LocationIcon from '../../assets/icons/Location';

function Location(props) {
	const { latLng } = props;
	return (
		<View style={styles.mapWrapper}>
			<Text style={styles.properTitle}>Konum</Text>
			<MapView initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}} style={styles.map}>
				<Marker coordinate={latLng}>
					<LocationIcon fill="green" style={styles.markerIcon}/>
				</Marker>
			</MapView>
		</View>
	);
}

Location.defaultProps = {
	latLng: {
		latitude: 37.78825,
		longitude: -122.4324,
	}
};

export default Location;
