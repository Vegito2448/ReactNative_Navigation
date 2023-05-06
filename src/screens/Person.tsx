import { StackScreenProps } from "@react-navigation/stack";
import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { RootStackParams } from "../navigator/StackNavigator";
import { styles } from "../theme/appTheme";
/* interface RouteParams {
	id: number;
	name: string;
} */
interface Props extends StackScreenProps<RootStackParams, "Person"> {}

export default function Person({ navigation, route }: Props) {
	const { params } = route;
	const { name = "", id } = params /* as RouteParams */; //params as RouteParams This is a type assertion (not recommended)
	console.log("🚀 ~ file: Person.tsx:11 ~ Person ~ params:", params);
	useEffect(() => {
		navigation.setOptions({ title: name });
	}, []);
	const { changeUserName } = useContext(AuthContext);
	useEffect(() => changeUserName(name), [name]);

	return (
		<View style={styles.globalMargin}>
			<Text>{JSON.stringify(params, null, 3)}</Text>
			<Text style={styles.title}>{name}</Text>
		</View>
	);
}
