import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';
import { ifIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: theme.color1
	},
	scrollView: {
		...ifIphoneX({
			paddingBottom: 100,
		}, {
			paddingBottom: 90
		})
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
	properTitle: {
		fontSize: 20,
		color: theme.color7,
		fontFamily: theme.fontSemiBold,
		paddingBottom: 5,
		marginTop: 10
	}
});
