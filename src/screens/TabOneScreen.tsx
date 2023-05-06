import { useEffect } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TouchableIcon from "../components/TouchableIcon";
import { styles } from "../theme/appTheme";

const TabOneScreen = () => {
	useEffect(() => {
		console.log("TabOneScreen");
	}, []);
	const { top: marginTop } = useSafeAreaInsets();
	return (
		<View style={{ ...styles.globalMargin, marginTop }}>
			<Text style={styles.title}>TabOneScreen</Text>

			<Text>
				<TouchableIcon iconName="airplane-outline" />
				<TouchableIcon iconName="attach-outline" />
				<TouchableIcon iconName="baseball-outline" />
				<TouchableIcon iconName="basket-outline" />
				<TouchableIcon iconName="car-sport-outline" />
				<TouchableIcon iconName="color-wand-outline" />
				<TouchableIcon iconName="desktop-outline" />
				<TouchableIcon iconName="apps-outline" />
			</Text>
		</View>
	);
};

export default TabOneScreen;
