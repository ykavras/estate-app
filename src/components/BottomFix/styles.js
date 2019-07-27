import { StyleSheet } from 'react-native';
import theme from '../../lib/theme';
import { ifIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
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
	}
});
