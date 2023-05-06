import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";

const PageTwo = () => {
	const navigator = useNavigation();
	useEffect(() => {
		navigator.setOptions({
			title: "Hello World",
			headerBackTitle: "Back", // IOs
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>PageTwo</Text>
			<Button
				title="Go to page 3"
				onPress={() => navigator.navigate("PageThree")}
			/>
		</View>
	);
};

export default PageTwo;
