import React, { useContext } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";
import { colors, styles } from "../theme/appTheme";
const Settings = () => {
	const insets = useSafeAreaInsets();
	const { authState } = useContext(AuthContext);

	return (
		<View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
			<Text style={styles.title}>Settings</Text>
			<Text>{JSON.stringify(authState, null, 4)}</Text>
			{authState.favoriteIcon && (
				<Icon name={authState.favoriteIcon} size={50} color={colors.primary} />
			)}
		</View>
	);
};

export default Settings;
