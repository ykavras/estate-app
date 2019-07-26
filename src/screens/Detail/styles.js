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
	bottomFix: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: theme.color1,
		borderTopWidth: 1,
		borderTopColor: theme.color2,
		zIndex: 1,
		elevation: 1,
		paddingHorizontal: 15,
		...ifIphoneX({
			height: 100,
			paddingBottom: 10
		}, {
			height: 80
		})
	},
	bottomFixInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottomFixInfoImg: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 10
	},
	bottomFixInfoText: {
		fontFamily: theme.fontMedium,
		color: theme.color4,
		fontSize: 16
	},
	bottomFixBtns: {
		flexDirection: 'row',

	},
	bottomFixBtn: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: 'rgb(216,230,244)',
		padding: 15,
	},
	bottomFixBtnIcon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	button: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: 'rgba(216,230,244,0.5)',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10
	},
	buttonIcon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	scrollView: {
		...ifIphoneX({
			paddingBottom: 200,
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
		color: theme.color5
	},
	readMore: {
		paddingVertical: 10
	},
	readMoreTitle: {
		fontSize: 14,
		fontFamily: theme.fontMedium,
		color: theme.color8,
	},
	gallery: {
		height: 90,
		marginHorizontal: - 4,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	galleryBox: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	galleryBoxSmall: {},
	galleryImgBtn: {
		width: '100%',
		padding: 4
	},
	galleryImgBtnSmall: {
		width: '50%',
	},
	galleryImg: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 6
	},
	moreImage: {},
	moreImgBox: {
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	moreImageIconBox: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: 'rgba(216,230,244,0.5)',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10
	},
	moreImageIcon: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
		transform: [{ rotateY: '180deg' }]
	},
	moreImgCount: {
		fontFamily: theme.fontRegular,
		fontSize: 12,
		color: theme.color1,
		paddingTop: 6
	},
});
