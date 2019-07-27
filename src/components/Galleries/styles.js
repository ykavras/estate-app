import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
	gallery: {
		height: 180,
		marginHorizontal: -4,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	galleryBox: {
		width: '50%',
		height: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	galleryBoxSmall: {},
	galleryImgBtn: {
		width: '100%',
		height: '100%',
		padding: 4
	},
	galleryImgBtnSmall: {
		width: '50%',
		height: '50%',
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
		width: '100%',
		height: '100%',
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
