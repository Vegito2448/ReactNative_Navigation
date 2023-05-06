import { StyleSheet } from "react-native";

export const colors = {
	primary: "#5856D6",
};

export const styles = StyleSheet.create({
	globalMargin: {
		marginHorizontal: 20,
	},
	title: {
		fontSize: 30,
		marginBottom: 10,
	},
	bigButton: {
		width: 100,
		height: 100,
		backgroundColor: "skyblue",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		margin: 10,
	},
	bigButtonText: {
		fontSize: 18,
		color: "white",
	},
	avatarContainer: {
		alignItems: "center",
		margin: 0,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 100,
	},
	containerMenu: {
		marginVertical: 30,
		marginHorizontal: 20,
	},
	buttonMenu: {
		marginVertical: 10,
	},
	textMenu: { fontSize: 25 },
});
