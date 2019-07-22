import {StyleSheet, Dimensions, Platform} from 'react-native';
import theme from '../../lib/theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: theme.color3
	},
	backButon: {
		width: 26,
		height: 26,
		zIndex: 2,
		elevation: 2,
		position: 'absolute',
		left: 15,
		top: 40
	},
	backIcon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	openPanorama: {
		position: 'absolute',
		right: 15,
		top: 30,
		width: 50,
		height: 50,
		zIndex: 2,
		elevation: 2
	},
	panoramaIcon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	imageBox: {
		backgroundColor: theme.color1,
		paddingHorizontal: 15,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'visible',
		zIndex: 1,
		position: 'absolute',
		width: '100%',
		left: 0,
		top: 0
	},
	image: {
		width: '100%',
		resizeMode: 'contain',
		top: 50
	},
	info: {
		width: '100%',
		backgroundColor: theme.colorWhite,
		borderRadius: 30,
		padding: 15,
		justifyContent: 'space-between',
		shadowColor: theme.colorBlack,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.4,
		shadowRadius: 20,
		elevation: 8,
		zIndex: 1
	},
	name: {
		fontFamily: theme.fontBold,
		fontSize: 24,
		color: theme.colorBlack
	},
	category: {
		fontFamily: theme.fontMedium,
		fontSize: 14,
		color: theme.colorBlack,
		paddingTop: 5,
		paddingBottom: 10
	},
	locationBox: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	location: {
		fontFamily: theme.fontMedium,
		fontSize: 16,
		color: theme.colorBlack
	},
	locationIcon: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
		marginRight: 5
	},
	makeOffer: {
		width: 238,
		height: 55,
		borderRadius: 20,
		backgroundColor: theme.color5,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 30,
		alignSelf: 'center',
		elevation: 1,
		zIndex: 1
	},
	makeOfferText: {
		fontFamily: theme.fontSemiBold,
		color: theme.colorWhite,
		fontSize: 18
	},
	description: {
		fontFamily: theme.fontMedium,
		fontSize: 16,
		paddingVertical: 10,
		color: theme.colorBlack,
		paddingHorizontal: 15
	},
	panoramaWrapper: {
		position: 'absolute',
		left: 0,
		top: 0,
		width,
		height: Platform.OS === 'android' ? height - 24 : height,
		backgroundColor: theme.color5,
		zIndex: 1,
		elevation: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	webView: {
		width,
		height: Platform.OS === 'android' ? height - 24 : height
	}
});
