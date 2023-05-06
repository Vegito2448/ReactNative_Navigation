import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";
import { colors } from "../theme/appTheme";
interface Props {
	iconName: string;
}
const TouchableIcon = ({ iconName = "" }: Props) => {
	const { changeFavoriteIcon } = useContext(AuthContext);
	return (
		<TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
			<Text>
				<Icon name={iconName} size={50} color={colors.primary} />;
			</Text>
		</TouchableOpacity>
	);
};

export default TouchableIcon;
