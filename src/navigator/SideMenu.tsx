import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import {
	Text,
	TouchableOpacity,
	View,
	useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Settings from "../screens/Settings";
import { colors, styles } from "../theme/appTheme";
import Tabs from "./Tabs";

const Drawer = createDrawerNavigator();

function SideMenu() {
	const { height, width } = useWindowDimensions();
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerType: width >= 768 ? "permanent" : "front",
			}}
			drawerContent={(props) => <InternalMenu {...props} />}
		>
			<Drawer.Screen name="Tabs" component={Tabs} />
			<Drawer.Screen name="Settings" component={Settings} />
		</Drawer.Navigator>
	);
}

export default SideMenu;
const InternalMenu = ({ navigation }: DrawerContentComponentProps) => (
	<DrawerContentScrollView>
		{/* Part of Avatar */}
		<View style={styles.avatarContainer}>
			<Text>
				<Icon name="person-circle-outline" size={150} color='#ccc' />
			</Text>
		</View>
		{/* Options Menu */}
		<View style={styles.containerMenu}>
			<TouchableOpacity
				style={{ ...styles.buttonMenu, flexDirection: "row" }}
				onPress={() => navigation.navigate("Tabs")}
			>
				<Icon name="compass-outline" size={25} color={colors.primary} />
				<Text style={styles.textMenu}> Navigation</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonMenu}
				onPress={() => navigation.navigate("Settings")}
			>
				<Text style={styles.textMenu}>
					Settings <Icon name="cog-outline" size={20} color='#ccc' />
				</Text>
			</TouchableOpacity>
		</View>
	</DrawerContentScrollView>
);
