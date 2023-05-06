import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
interface Props extends StackScreenProps<any, any> {}
const PageThree = ({ navigation }: Props) => {
	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>PageThree</Text>
			<Button title="Return" onPress={() => navigation.pop()} />
			<Button title="Go Home" onPress={() => navigation.popToTop()} />
		</View>
	);
};

export default PageThree;
