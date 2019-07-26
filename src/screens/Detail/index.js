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
import styles from './styles';
import theme from '../../lib/theme';
import DetailImage from '../../assets/img/detail-img.jpg';
import BackIcon from '../../assets/icons/Back';
import CubeIcon from '../../assets/icons/Cube';
import LocationIcon from '../../assets/icons/Location';
import CallIcon from '../../assets/icons/Call';
import MessageIcon from '../../assets/icons/Message';

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readMore: false
		};
	}

	readMoreFunc = () => {
		this.setState({ readMore: true });
	};

	render() {
		const { readMore } = this.state;
		return (
			<View style={styles.wrapper}>
				<StatusBar barStyle="light-content"/>
				<View style={styles.topButtons}>
					<TouchableOpacity style={styles.button}>
						<BackIcon fill="white" style={styles.buttonIcon}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<BackIcon fill="white" style={styles.buttonIcon}/>
					</TouchableOpacity>
				</View>
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
				<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
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
						<View style={[styles.descriptionBox, { height: readMore ? null : 100 }]}>
							<Text style={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
								alias assumenda atque blanditiis consequatur culpa deleniti earum eius excepturi illum, in itaque
								numquam quia quidem, quod sunt suscipit vero!
							</Text>
							{
								readMore
									?
									null
									:
									<TouchableOpacity style={styles.readMore} onPress={() => this.readMoreFunc()}>
										<Text style={styles.readMoreTitle}>Devamını Oku</Text>
									</TouchableOpacity>
							}
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default Detail;
