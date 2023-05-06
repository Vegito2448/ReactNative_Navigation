import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import AlbumsScreen from "../screens/AlbumsScreen";
import ChatsScreen from "../screens/ChatsScreen";
import ContactsScreen from "../screens/ContactsScreen";
import { colors } from "../theme/appTheme";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
	const { top: paddingTop } = useSafeAreaInsets();
	return (
		<Tab.Navigator
			style={{ paddingTop }}
			sceneContainerStyle={{
				backgroundColor: "white",
			}}
			screenOptions={({ route }) => ({
				tabBarPressColor: colors.primary,
				tabBarShowIcon: true,
				tabBarIndicatorStyle: {
					backgroundColor: colors.primary,
				},
				tabBarStyle: {
					// borderTopColor: colors.primary,
					// borderTopWidth: 1,
					shadowColor: "transparent",
					elevation: 0,
				},
				tabBarIcon: ({ color, focused }) => {
					let iconName: string = "";
					switch (route.name) {
						case "ChatsScreen":
							iconName = "chatbox-ellipses-outline";
							break;
						case "ContactsScreen":
							iconName = "call-outline";
							break;
						case "AlbumsScreen":
							iconName = "image-outline";
							break;
						default:
							iconName = "ban-outline";
							break;
					}
					const iconColor = focused ? colors.primary : color;
					return <Icon name={iconName} size={20} color={iconColor} />;
				},
			})}
		>
			<Tab.Screen
				name="ChatsScreen"
				options={{ title: "Chat" }}
				component={ChatsScreen}
			/>
			<Tab.Screen
				name="ContactsScreen"
				options={{ title: "Contacts" }}
				component={ContactsScreen}
			/>
			<Tab.Screen
				name="AlbumsScreen"
				options={{ title: "Albums" }}
				component={AlbumsScreen}
			/>
		</Tab.Navigator>
	);
}
