import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { useWindowDimensions } from "react-native";
import Settings from "../screens/Settings";
import StackNavigator from "./StackNavigator";

const Drawer = createDrawerNavigator();

function BasicSideMenu() {
	const { height, width } = useWindowDimensions();
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerPosition: "right",
				drawerType: width >= 768 ? "permanent" : "front",
			}}
		>
			<Drawer.Screen
				options={{ title: "🏠 Home" }}
				name="StackNavigator"
				component={StackNavigator}
			/>
			<Drawer.Screen
				options={{ title: "⚙️ Settings" }}
				name="Settings"
				component={Settings}
			/>
		</Drawer.Navigator>
	);
}

export default BasicSideMenu;
