import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TabOneScreen from "../screens/TabOneScreen";
import { colors } from "../theme/appTheme";
import StackNavigator from "./StackNavigator";
import TopTabNavigator from "./TopTabNavigator";

const BottomTabIOS = createBottomTabNavigator();

const Tabs = () => {
	return Platform.OS === "ios" ? <TabsIOS /> : <TabsAndroid />;
};

function TabsIOS() {
	return (
		<BottomTabIOS.Navigator
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: colors.primary,
				headerStyle: {
					borderTopColor: colors.primary,
					borderTopWidth: 1,
					elevation: 0,
				},
				tabBarLabelStyle: {
					fontSize: 15,
				},
				tabBarIcon: ({ color, focused, size }) => {
					let iconName: string;
					switch (route.name) {
						case "TabOneScreen":
							iconName = "apps-outline";
							break;
						case "TopTabNavigator":
							iconName = "caret-up-circle-outline";
							break;
						case "StackNavigator":
							iconName = "home";
							break;
						default:
							iconName = "ban";
							break;
					}
					return <Icon name={iconName} size={50} color={colors.primary} />;
				},
			})}
			sceneContainerStyle={{
				backgroundColor: "white",
			}}
		>
			{/* <Tab.Screen
				name="TabOneScreen"
				component={TabOneScreen}
				options={{
					title: "Icons",
					tabBarIcon: (props) => <Text style={{ color: props.color }}>👍</Text>,
				}}
			/> */}
			<BottomTabIOS.Screen
				name="TabOneScreen"
				component={TabOneScreen}
				options={{
					title: "Icons",
				}}
			/>
			<BottomTabIOS.Screen
				name="TopTabNavigator"
				component={TopTabNavigator}
				options={{ title: "Top Tabs Navigator" }}
			/>
			<BottomTabIOS.Screen
				name="StackNavigator"
				component={StackNavigator}
				// options={{ title: "Home" }}
			/>
		</BottomTabIOS.Navigator>
	);
}

const BottomTabAndroid = createBottomTabNavigator();

function TabsAndroid() {
	return (
		<BottomTabAndroid.Navigator
			screenOptions={({ route }) => ({
				tabBarStyle: {
					backgroundColor: colors.primary,
				},
				tabBarIcon: ({ color, focused, size }) => {
					let iconName: string;
					switch (route.name) {
						case "TabOneScreen":
							iconName = "apps-outline";
							break;
						case "TopTabNavigator":
							iconName = "caret-up-circle-outline";
							break;
						case "StackNavigator":
							iconName = "home";
							break;
						default:
							iconName = "ban";
							break;
					}

					const iconColor = focused ? "white" : color;

					return <Icon name={iconName} size={20} color={iconColor} />;
				},
				tabBarLabelStyle: { color: "white" },
			})}
			sceneContainerStyle={{
				backgroundColor: "white",
			}}
		>
			<BottomTabAndroid.Screen
				name="TabOneScreen"
				component={TabOneScreen}
				options={{
					title: "Icons",
				}}
			/>
			<BottomTabAndroid.Screen
				name="TopTabNavigator"
				component={TopTabNavigator}
				options={{ title: "Top Tabs Screens" }}
			/>
			<BottomTabAndroid.Screen
				name="StackNavigator"
				component={StackNavigator}
				// options={{ title: "Home" }}
			/>
		</BottomTabAndroid.Navigator>
	);
}
export default Tabs;
