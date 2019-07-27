import React, { Component } from 'react';
import {
	View,
	StatusBar,
	Text,
	ScrollView
} from 'react-native';
import styles from './styles';
import theme from '../../lib/theme';
import LocationIcon from '../../assets/icons/Location';
import {
	Amenities,
	BottomFix,
	FloorPlan,
	Galleries,
	ImageDetail,
	Location,
	MoreBtn,
	TopButtons
} from '../../components';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readMore: false,
		};
	}

	readMoreFunc = () => {
		this.setState({ readMore: !this.state.readMore });
	};

	render() {
		const { readMore } = this.state;
		return (
			<View style={styles.wrapper}>
				<StatusBar barStyle="light-content"/>
				<TopButtons/>
				<BottomFix/>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.scrollView}>
					<ImageDetail/>
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
							readMore ?
								<MoreBtn title="Devamını Kapat" onPress={() => this.readMoreFunc()}/> :
								<MoreBtn title="Devamını Oku" onPress={() => this.readMoreFunc()}/>
						}
						<Galleries/>
						<FloorPlan/>
						<Amenities/>
						<Location/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default Detail;
