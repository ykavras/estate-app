import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';

export default StyleSheet.create({
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
	}
});
