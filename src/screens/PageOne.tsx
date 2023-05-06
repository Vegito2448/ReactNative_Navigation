import { DrawerScreenProps } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors, styles } from "../theme/appTheme";

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const PageOne = ({ navigation }: Props) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
					<Text>
						<Icon name={"menu-outline"} size={50} color={colors.primary} />
					</Text>
				</TouchableOpacity>
			),
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>PageOne</Text>
			<Button
				title="Go to page 2"
				onPress={() => navigation.navigate("PageTwo")}
			/>
			<Text
				style={{
					marginVertical: 20,
					fontSize: 20,
					fontWeight: "bold",
				}}
			>
				Navigate with Arguments
			</Text>

			<View
				style={{
					flexDirection: "row",
				}}
			>
				<TouchableOpacity
					style={{ ...styles.bigButton, backgroundColor: "#5856D6" }}
					onPress={() =>
						navigation.navigate("Person", { id: 1, name: "Jackson" })
					}
				>
					<Text style={styles.bigButtonText}>Person 1</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.bigButton}
					onPress={() =>
						navigation.navigate("Person", { id: 2, name: "Susan" })
					}
				>
					<Text style={styles.bigButtonText}>Person 2</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PageOne;
