import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

export default StyleSheet.create({
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
