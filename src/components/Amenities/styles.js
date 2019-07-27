import { StyleSheet } from 'react-native';
import theme from "../../lib/theme";

export default StyleSheet.create({
	properTitle: {
		fontSize: 20,
		color: theme.color7,
		fontFamily: theme.fontSemiBold,
		paddingBottom: 5,
		marginTop: 10
	},
	properList: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	property: {
		fontSize: 14,
		fontFamily: theme.fontRegular,
		color: theme.color7,
		opacity: 0.6,
		width: '50%',
		paddingVertical: 5
	},
});
