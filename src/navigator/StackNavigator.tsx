import { createStackNavigator } from "@react-navigation/stack";
import PageOne from "../screens/PageOne";
import PageThree from "../screens/PageThree";
import PageTwo from "../screens/PageTwo";
import Person from "../screens/Person";

export type RootStackParams = {
	PageOne: undefined;
	PageTwo: undefined;
	PageThree: undefined;
	Person: { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

export default function StackNavigator() {
	return (
		<Stack.Navigator
			// initialRouteName="PageTwo"
			screenOptions={{
				// headerShown: false,
				headerStyle: {
					elevation: 0, // Android
					shadowColor: "transparent", // iOS
				},
				cardStyle: {
					backgroundColor: "white",
				},
			}}
		>
			<Stack.Screen
				name="PageOne"
				options={{ title: "Page One" }}
				component={PageOne}
			/>
			<Stack.Screen
				name="PageTwo"
				options={{ title: "Page Two" }}
				component={PageTwo}
			/>
			<Stack.Screen
				name="PageThree"
				options={{ title: "Page Three" }}
				component={PageThree}
			/>
			<Stack.Screen
				name="Person"
				options={{ title: "Person Page" }}
				component={Person}
			/>
		</Stack.Navigator>
	);
}
