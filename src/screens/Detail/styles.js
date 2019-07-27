import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../lib/theme';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: theme.color1
	},
	topButtons: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		zIndex: 1,
		elevation: 1,
		...ifIphoneX({
			paddingTop: 50
		}, {
			paddingTop: 30
		})
	},
	scrollView: {
		...ifIphoneX({
			paddingBottom: 100,
		}, {
			paddingBottom: 90
		})
	},
	imgWrapper: {
		height: height / 2,
		justifyContent: 'flex-end',
		//display: 'none'
	},
	img: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	imgFooter: {
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',

	},
	price: {
		fontFamily: theme.fontRegular,
		fontSize: 30,
		color: theme.color1
	},
	btn360: {
		backgroundColor: theme.color1,
		alignItems: 'center',
		justifyContent: 'center',
		width: 150,
		height: 50,
		borderRadius: 30,
		flexDirection: 'row'
	},
	btn360Title: {
		fontFamily: theme.fontRegular,
		color: theme.color7,
		fontSize: 14
	},
	btn360Icon: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
		marginLeft: 5
	},
	content: {
		padding: 15
	},
	name: {
		fontSize: 20,
		fontFamily: theme.fontMedium,
		color: theme.color8,
		paddingBottom: 5
	},
	title: {
		fontSize: 30,
		fontFamily: theme.fontBold,
		color: theme.color7,
		paddingBottom: 5
	},
	address: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	addressText: {
		fontSize: 16,
		fontFamily: theme.fontRegular,
		color: theme.color4
	},
	location: {
		width: 14,
		height: 14,
		resizeMode: 'contain',
		marginRight: 6,
	},
	descriptionBox: {},
	description: {
		fontFamily: theme.fontRegular,
		fontSize: 16,
		paddingTop: 15,
		color: theme.color5,
		marginBottom: 10,
	},
	readMore: {
		paddingBottom: 10
	},
	readMoreTitle: {
		fontSize: 14,
		fontFamily: theme.fontMedium,
		color: theme.color8,
	},
	properTitle: {
		fontSize: 20,
		color: theme.color7,
		fontFamily: theme.fontSemiBold,
		paddingBottom: 5,
		marginTop: 10
	},
	mapWrapper: {
		borderTopWidth: 1,
		borderColor: 'rgba(0,0,0,0.2)',
		marginTop: 20
	},
	map: {
		height: 120,
		borderRadius: 6
	},
	markerIcon: {
		width: 30,
		height: 30,
		resizeMode: 'contain'
	},
});
