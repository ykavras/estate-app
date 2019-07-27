import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../lib/theme';

const { height } = Dimensions.get('window');
export default StyleSheet.create({
	imgWrapper: {
		height: height / 2,
		justifyContent: 'flex-end',
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
});
