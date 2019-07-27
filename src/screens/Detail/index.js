import React, { Component } from 'react';
import {
	View,
	StatusBar,
	TouchableOpacity,
	Image,
	Text,
	ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Mapview, { Marker } from 'react-native-maps';
import styles from './styles';
import theme from '../../lib/theme';
import DetailImage from '../../assets/img/detail-img.jpg';
import BackIcon from '../../assets/icons/Back';
import HeartIcon from '../../assets/icons/Heart';
import CubeIcon from '../../assets/icons/Cube';
import LocationIcon from '../../assets/icons/Location';
import { Amenities, BottomFix, FloorPlan, Galleries } from '../../components';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readMore: false,
			latLng: {
				latitude: 37.78825,
				longitude: -122.4324,
			}
		};
	}

	readMoreFunc = () => {
		this.setState({ readMore: true });
	};

	render() {
		const { readMore, latLng } = this.state;
		return (
			<View style={styles.wrapper}>
				<StatusBar barStyle="light-content"/>
				<View style={styles.topButtons}>
					<TouchableOpacity style={styles.button}>
						<BackIcon fill="white" style={styles.buttonIcon}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<HeartIcon fill="white" style={styles.buttonIcon}/>
					</TouchableOpacity>
				</View>
				<BottomFix/>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollView}>
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
					<View style={styles.content}>
						<Text style={styles.name}>Maslak 1453</Text>
						<Text style={styles.title}>Doğayla iç içe bütünleşmiş bir hayat</Text>
						<View style={styles.address}>
							<LocationIcon fill={theme.color5} style={styles.location}/>
							<Text style={styles.addressText}>Göztepe caddesi, İstanbul / Maslak</Text>
						</View>
						<View style={[styles.descriptionBox, readMore ? null : { height: 98 }]}>
							<Text style={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
								alias assumenda atque blanditiis consequatur culpa deleniti earum eius excepturi illum, in itaque
								numquam quia quidem, quod sunt suscipit vero!
							</Text>
						</View>
						{
							readMore
								?
								null
								:
								<TouchableOpacity style={styles.readMore} onPress={() => this.readMoreFunc()}>
									<Text style={styles.readMoreTitle}>Devamını Oku</Text>
								</TouchableOpacity>
						}
						<Galleries/>
						<FloorPlan/>
						<Amenities/>
						<View style={styles.mapWrapper}>
							<Text style={styles.properTitle}>Konum</Text>
							<Mapview initialRegion={{
								latitude: 37.78825,
								longitude: -122.4324,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							}} style={styles.map}>
								<Marker coordinate={latLng}>
									<LocationIcon fill="green" style={styles.markerIcon}/>
								</Marker>
							</Mapview>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default Detail;
